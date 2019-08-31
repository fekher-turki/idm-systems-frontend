import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class ExpenseService {

    private baseUrl = 'http://localhost:8000/expense';

    constructor(private http: HttpClient) { }

    createExpense(form): Observable<object> {
        return this.http.post(`${this.baseUrl}/`, form);
    }

    updateExpense(id: number, form): Observable<object> {
        return this.http.put(`${this.baseUrl}/${id}`, form);
    }

    deleteExpense(id: number): Observable<any> {
        return this.http.delete(`${this.baseUrl}/${id}`);
    }

    getExpenseList(): Observable<any> {
        return this.http.get(`${this.baseUrl}/`);
    }

    getExpenseCount(): Observable<any> {
        return this.http.get(`${this.baseUrl}/count/`);
    }

    getUserExpenseList(user): Observable<any> {
        return this.http.get(`${this.baseUrl}/user/${user}/`);
    }

    getExpenseById(identity: number): Observable<any> {
        return this.http.get(`${this.baseUrl}/id/${identity}/`);
    }

    getExpenseByExpenseReportId(expenseReport: number): Observable<any> {
        return this.http.get(`${this.baseUrl}/expenseReport/${expenseReport}/`);
    }

    getModExpenseByExpenseReportId(expenseReport: number, mod): Observable<any> {
        return this.http.get(`${this.baseUrl}/${mod}/expenseReport/${expenseReport}/`);
    }

    getUserExpenseById(identity: number, user): Observable<any> {
        return this.http.get(`${this.baseUrl}/${user}/id/${identity}/`);
    }

    deleteAll(): Observable<any> {
        return this.http.delete(`${this.baseUrl}/`);
    }
}
