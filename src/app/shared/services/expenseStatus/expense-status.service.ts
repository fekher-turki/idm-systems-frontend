import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class ExpenseStatusService {

    private baseUrl = 'http://localhost:8000/expenseStatus';

    constructor(private http: HttpClient) { }

    createExpenseStatus(expenseStatus): Observable<object> {
        return this.http.post(`${this.baseUrl}/`, expenseStatus);
    }

    updateExpenseStatus(id: number, value: any): Observable<object> {
        return this.http.put(`${this.baseUrl}/${id}`, value);
    }

    deleteExpenseStatus(id: number): Observable<any> {
        return this.http.delete(`${this.baseUrl}/${id}`);
    }

    getExpenseStatusList(): Observable<any> {
        return this.http.get(`${this.baseUrl}/`);
    }

    getExpenseStatusById(identity: number): Observable<any> {
        return this.http.get(`${this.baseUrl}/id/${identity}/`);
    }

    getExpenseStatusByExpense(expense): Observable<any> {
        return this.http.get(`${this.baseUrl}/expense/${expense}/`);
    }

    countExpenseStatusByExpense(expense): Observable<any> {
        return this.http.get(`${this.baseUrl}/count/expense/${expense}/`);
    }

    getExpenseStatusByModExpense(mod, expense): Observable<any> {
        return this.http.get(`${this.baseUrl}/mod/${mod}/expense/${expense}/`);
    }

    deleteAll(): Observable<any> {
        return this.http.delete(`${this.baseUrl}/`);
    }
}
