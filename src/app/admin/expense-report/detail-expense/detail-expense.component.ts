import {Component, Input, OnInit} from '@angular/core';
import { routerTransition } from '../../../router.animations';
import {Observable} from 'rxjs';
import {ExpenseService} from '../../../shared/services/expense/expense.service';
import {Expense} from '../../../shared/models/expense';
import {ActivatedRoute} from '@angular/router';

@Component({
    selector: 'app-detail-expense',
    templateUrl: './detail-expense.component.html',
    styleUrls: ['./detail-expense.component.scss'],
    animations: [routerTransition()]
})
export class DetailExpenseComponent implements OnInit {

    id: number;
    expenses: Observable<Expense[]>;
    @Input() expense: Expense;
    baseUrl = 'http://localhost:8000';

    constructor(private expenseService: ExpenseService, private route: ActivatedRoute) { }

    ngOnInit() {
        this.reloadData();
    }

    reloadData() {
        this.expenses = this.expenseService.getExpenseById(this.route.snapshot.params['id']);

    }
}
