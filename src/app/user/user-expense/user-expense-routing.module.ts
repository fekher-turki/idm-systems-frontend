import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ExpenseComponent} from './user-expense.component';
import {AddExpenseComponent} from './user-add-expense/user-add-expense.component';
import {UpdateExpenseComponent} from './user-update-expense/user-update-expense.component';
import {DetailExpenseComponent} from './user-detail-expense/user-detail-expense.component';

const routes: Routes = [
    {
        path: '', component: ExpenseComponent
    },
    {
        path: 'addExpense', component: AddExpenseComponent
    },
    {
        path: 'updateExpense/:id', component: UpdateExpenseComponent
    },
    {
        path: 'detailExpense/:id', component: DetailExpenseComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ExpenseRoutingModule { }
