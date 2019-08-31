import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, NgForm, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {ExpenseService} from '../../../shared/services/expense/expense.service';
import {Observable} from 'rxjs';
import {ExpenseReport} from '../../../shared/models/expenseReport';
import {Category} from '../../../shared/models/category';
import {Currency} from '../../../shared/models/currency';
import {ExpenseReportService} from '../../../shared/services/expenseReport/expense-report.service';
import {CategoryService} from '../../../shared/services/category/category.service';
import {CurrencyService} from '../../../shared/services/currency/currency.service';
import {Expense} from '../../../shared/models/expense';
import {ExchangeRate} from '../../../shared/models/exchangeRate';
import {ExchangeRateService} from '../../../shared/services/exchangeRate/exchange-rate.service';
import {HttpErrorResponse} from '@angular/common/http';

@Component({
    selector: 'app-user-update-expense',
    templateUrl: './user-update-expense.component.html',
    styleUrls: ['./user-update-expense.component.scss']
})
export class UpdateExpenseComponent implements OnInit {

    user = localStorage.getItem('username');
    expenseForm: FormGroup;
    expenseReports: Observable<ExpenseReport[]>;
    @Input() expenseReport: ExpenseReport;
    categories: Observable<Category[]>;
    @Input() category: Category;
    currencies: Observable<Currency[]>;
    @Input() currency: Currency;
    expenses: Observable<Expense[]>;
    @Input() expense: Expense;
    exchangeRates: Observable<ExchangeRate[]>;
    @Input() exchangeRate: ExchangeRate;
    _id: number = null;
    submitted = false;
    alertmsg: string;
    alertcolor: string;
    selectedFile = null;

    // tslint:disable-next-line:max-line-length
    constructor(private exchangeRateService: ExchangeRateService, private currencyService: CurrencyService, private categoryService: CategoryService, private expenseReportService: ExpenseReportService, private expenseService: ExpenseService, private router: Router, private route: ActivatedRoute, private formBuilder: FormBuilder) { }

    ngOnInit() {
        this.getExpense(this.route.snapshot.params['id']);
        this.expenseForm = this.formBuilder.group({
            'id' : [null, Validators.required],
            'reference' : [null, Validators.required],
            'expenseReport' : [null, Validators.required],
            'date' : [null, Validators.required],
            'category' : [null, Validators.required],
            'description' : [null, Validators.required],
            'amount_ini' : [null, Validators.required],
            'currency' : [null, Validators.required],
            'draft' : [null, Validators.required],
        });
        this.reloadData();
    }

    getExpense(id) {
        this.expenseService.getUserExpenseById(id, this.user)
            .subscribe(data => {
                this._id = data[0].id;
                if (data[0].draft === true) {
                    data[0].draft = 1;
                }
                if (data[0].draft === false) {
                    data[0].draft = 0;
                }
                this.expenseForm.setValue({
                    id: data[0].id,
                    reference: data[0].reference,
                    expenseReport: data[0].expenseReport,
                    date: data[0].date,
                    category: data[0].category,
                    description: data[0].description,
                    amount_ini: data[0].amount_ini,
                    currency: data[0].currency,
                    draft: data[0].draft
                });
            });
    }

    onSubmit(form: NgForm) {
        const fd = new FormData();
        fd.append('reference', form['reference']);
        fd.append('expenseReport', JSON.stringify(form['expenseReport']));
        fd.append('date', form['date']);
        if (this.selectedFile == null) {
            fd.append('image', '');
        } else {
            fd.append('image', this.selectedFile, this.selectedFile.name);
        }
        fd.append('category', JSON.stringify(form['category']));
        fd.append('description', form['description']);
        fd.append('amount_ini', form['amount_ini']);
        fd.append('currency', JSON.stringify(form['currency']));
        if (form['draft'] === 0) {
            fd.append('draft', '0');
        } else {
            fd.append('draft', '1');
        }
        this.expenseService.updateExpense(this._id, fd)
            .subscribe(
                data => {
                    console.log(data);
                    this.submitted = true;
                    this.alertmsg = 'Expense updated!';
                    this.alertcolor = 'alert-success';
                },
                error => {
                    console.log(error.body);
                });
        this.alertmsg = 'Error occurred!';
        this.alertcolor = 'alert-warning';
    }

    closeAlert() {
        this.submitted = false;
    }

    onFileSelected(event) {
        this.selectedFile = event.target.files[0];
    }

    reloadData() {
        this.expenses = this.expenseService.getUserExpenseById((this.route.snapshot.params['id']), this.user);
        this.expenseReports = this.expenseReportService.getUserExpenseReportList(this.user);
        this.categories = this.categoryService.getCategoryList();
        this.currencies = this.currencyService.getCurrencyList();
        this.exchangeRates = this.exchangeRateService.getExchangeRateList();
    }

    compareFn(c1: any, c2: any): boolean {
        return c1 && c2 ? c1.id === c2.id : c1 === c2;
    }
}
