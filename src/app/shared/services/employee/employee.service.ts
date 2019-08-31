import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class EmployeeService {

    private baseUrl = 'http://localhost:8000/employee';

    constructor(private http: HttpClient) { }

    createEmployee(employee: Object): Observable<object> {
        return this.http.post(`${this.baseUrl}/`, employee);
    }

    updateEmployee(id: number, value: any): Observable<object> {
        return this.http.put(`${this.baseUrl}/${id}`, value);
    }

    deleteEmployee(id: number): Observable<any> {
        return this.http.delete(`${this.baseUrl}/${id}`);
    }

    getEmployeeList(): Observable<any> {
        return this.http.get(`${this.baseUrl}/`);
    }

    getEmployeeById(identity: number): Observable<any> {
        return this.http.get(`${this.baseUrl}/id/${identity}/`);
    }

    getEmployeeByUser(identity: number): Observable<any> {
        return this.http.get(`${this.baseUrl}/user/${identity}/`);
    }

    getApproverEmployee(): Observable<any> {
        return this.http.get(`${this.baseUrl}/approver/`);
    }

    deleteAll(): Observable<any> {
        return this.http.delete(`${this.baseUrl}/`);
    }
}
