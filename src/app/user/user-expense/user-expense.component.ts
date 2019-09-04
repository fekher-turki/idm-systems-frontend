import {Component, Input, OnInit} from '@angular/core';
import { routerTransition } from '../../router.animations';
import {Observable} from 'rxjs';
import {ExpenseService} from '../../shared/services/expense/expense.service';
import {Expense} from '../../shared/models/expense';

@Component({
    selector: 'app-user-expense',
    templateUrl: './user-expense.component.html',
    styleUrls: ['./user-expense.component.scss'],
    animations: [routerTransition()]
})
export class ExpenseComponent implements OnInit {

    user = localStorage.getItem('username');
    id: number;
    expenses: Observable<Expense[]>;
    @Input() expense: Expense;
    total: number;
    baseUrl = 'http://localhost:8000';

    constructor(private expenseService: ExpenseService) { }

    ngOnInit() {
        this.reloadData();
        this.getData();
    }

    deleteExpense(id) {
        this.expenseService.deleteExpense(id)
            .subscribe(
                data => {
                    console.log(data);
                    this.expenses = this.expenseService.getExpenseList();
                },
                error => {
                    console.log(error);
                    alert('You cannot delete this expense !');
                    location.reload();
                });
    }

    getData() {
        this.expenseService.getUserExpenseList(this.user).subscribe(data => {
            let i;
            this.total = 0.00;
            for (i = 0; i < data.length; i++) {
                if (data[i].draft == 0) {
                    console.log('avant' + this.total);
                    console.log('ajoutant ' + data[i].amount_final);
                    this.total += data[i].amount_final;
                    console.log('apres' + this.total);
                }
            }
        });
        return this.total;
    }

    reloadData() {
        this.expenses = this.expenseService.getUserExpenseList(this.user);
    }
}
