import {ExpenseReport} from './expenseReport';
import {Category} from './category';
import {Currency} from './currency';
import {ExchangeRate} from './exchangeRate';

export class Expense {
    id: number;
    reference: string;
    expenseReport: ExpenseReport;
    date: File;
    image: any;
    category: Category;
    description: string;
    amount_ini: string;
    amount_final: string;
    currency: Currency;
    exchangeRate: ExchangeRate;
    draft: boolean;
    status: boolean;
}
