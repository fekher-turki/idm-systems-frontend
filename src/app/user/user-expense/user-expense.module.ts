import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExpenseRoutingModule } from './user-expense-routing.module';
import {PageHeaderModule} from '../../shared/modules';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ExpenseComponent} from './user-expense.component';
import {AddExpenseComponent} from './user-add-expense/user-add-expense.component';
import {UpdateExpenseComponent} from './user-update-expense/user-update-expense.component';
import {DetailExpenseComponent} from './user-detail-expense/user-detail-expense.component';

@NgModule({
    declarations: [ExpenseComponent, AddExpenseComponent, UpdateExpenseComponent, DetailExpenseComponent],
    imports: [CommonModule,
        ExpenseRoutingModule,
        PageHeaderModule,
        FormsModule,
        ReactiveFormsModule]
})
export class ExpenseModule { }
