import {Component, Input, OnInit} from '@angular/core';
import {Expense} from '../../../shared/models/expense';
import {ExpenseService} from '../../../shared/services/expense/expense.service';
import {Observable} from 'rxjs';
import {ExpenseReport} from '../../../shared/models/expenseReport';
import {Router} from '@angular/router';
import {Category} from '../../../shared/models/category';
import {Currency} from '../../../shared/models/currency';
import {ExpenseReportService} from '../../../shared/services/expenseReport/expense-report.service';
import {CategoryService} from '../../../shared/services/category/category.service';
import {CurrencyService} from '../../../shared/services/currency/currency.service';

@Component({
    selector: 'app-user-add-expense',
    templateUrl: './user-add-expense.component.html',
    styleUrls: ['./user-add-expense.component.scss']
})
export class AddExpenseComponent implements OnInit {

    user = localStorage.getItem('username');
    expense: Expense = new Expense();
    id: number;
    expenseReports: Observable<ExpenseReport[]>;
    @Input() expenseReport: ExpenseReport;
    categories: Observable<Category[]>;
    @Input() category: Category;
    currencies: Observable<Currency[]>;
    @Input() currency: Currency;
    submitted = false;
    selectedFile = null;

    // tslint:disable-next-line:max-line-length
    constructor(private router: Router, private expenseService: ExpenseService, private expenseReportService: ExpenseReportService, private categoryService: CategoryService, private currencyService: CurrencyService) { }

    ngOnInit() {
        this.reloadData();
    }
    newExpense(): void {
        this.submitted = false;
        this.expense = new Expense();
    }
    save() {
        this.expense = new Expense();
    }

    onSubmit() {
        const fd = new FormData();
        fd.append('reference', this.expense.reference);
        fd.append('expenseReport',  JSON.stringify(this.expense.expenseReport));
        fd.append('date', this.expense.date);
        fd.append('image', this.selectedFile, this.selectedFile.name);
        fd.append('category',  JSON.stringify(this.expense.category));
        fd.append('description', this.expense.description);
        fd.append('amount_ini', this.expense.amount_ini);
        fd.append('currency', JSON.stringify(this.expense.currency));
        fd.append('draft', JSON.stringify(this.expense.draft));
        this.expenseService.createExpense(fd)
            .subscribe(
                data => {
                    console.log(data);
                    this.submitted = true;
                },
                error => alert(error.error.error));
        this.save();
    }

    onFileSelected(event) {
        this.selectedFile = event.target.files[0];
    }

    reloadData() {
        this.expenseReports = this.expenseReportService.getUserExpenseReportList(this.user);
        this.categories = this.categoryService.getCategoryList();
        this.currencies = this.currencyService.getCurrencyList();
    }
}
