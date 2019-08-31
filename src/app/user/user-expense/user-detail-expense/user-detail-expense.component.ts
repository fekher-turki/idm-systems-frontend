import {Component, Input, OnInit} from '@angular/core';
import { routerTransition } from '../../../router.animations';
import {Observable} from 'rxjs';
import {ExpenseService} from '../../../shared/services/expense/expense.service';
import {Expense} from '../../../shared/models/expense';
import {ActivatedRoute} from '@angular/router';

@Component({
    selector: 'app-user-detail-expense',
    templateUrl: './user-detail-expense.component.html',
    styleUrls: ['./user-detail-expense.component.scss'],
    animations: [routerTransition()]
})
export class DetailExpenseComponent implements OnInit {

    user = localStorage.getItem('username');
    id: number;
    expenses: Observable<Expense[]>;
    @Input() expense: Expense;
    baseUrl = 'http://localhost:8000';

    constructor(private expenseService: ExpenseService, private route: ActivatedRoute) { }

    ngOnInit() {
        this.reloadData();
    }

    reloadData() {
        this.expenses = this.expenseService.getUserExpenseById((this.route.snapshot.params['id']), this.user);

    }
}
