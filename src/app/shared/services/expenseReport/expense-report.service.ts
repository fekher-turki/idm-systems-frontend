import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class ExpenseReportService {

    private baseUrl = 'http://localhost:8000/expenseReport';

    constructor(private http: HttpClient) { }

    createExpenseReport(expenseReport: Object): Observable<object> {
        return this.http.post(`${this.baseUrl}/`, expenseReport);
    }

    updateExpenseReport(id: number, value: any): Observable<object> {
        return this.http.put(`${this.baseUrl}/${id}`, value);
    }

    deleteExpenseReport(id: number): Observable<any> {
        return this.http.delete(`${this.baseUrl}/${id}`);
    }

    getExpenseReportList(): Observable<any> {
        return this.http.get(`${this.baseUrl}/`);
    }

    getUserExpenseReportList(user): Observable<any> {
        return this.http.get(`${this.baseUrl}/user/${user}`);
    }

    getModExpenseReportList(user): Observable<any> {
        return this.http.get(`${this.baseUrl}/mod/${user}/`);
    }

    getExpenseReportCount(): Observable<any> {
        return this.http.get(`${this.baseUrl}/count`);
    }

    getExpenseReportById(identity: number): Observable<any> {
        return this.http.get(`${this.baseUrl}/id/${identity}/`);
    }

    getUserExpenseReportById(identity: number, user): Observable<any> {
        return this.http.get(`${this.baseUrl}/${identity}/user/${user}/`);
    }

     getModExpenseReportById(identity: number, user): Observable<any> {
        return this.http.get(`${this.baseUrl}/${identity}/mod/${user}/`);
    }

    countApprovers(expenseReport: number): Observable<any> {
        return this.http.get(`${this.baseUrl}/id/${expenseReport}/approvers/`);
    }

    deleteAll(): Observable<any> {
        return this.http.delete(`${this.baseUrl}/`);
    }
}
