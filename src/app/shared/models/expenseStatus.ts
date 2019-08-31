import {Approver} from './approver';
import {Expense} from './expense';

export class ExpenseStatus {
    id: number;
    approver: Approver;
    expense: Expense;
    status: number;
}
