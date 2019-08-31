import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class ApproverService {

    private baseUrl = 'http://localhost:8000/approver';

    constructor(private http: HttpClient) { }

    createApprover(approver: Object): Observable<object> {
        return this.http.post(`${this.baseUrl}/`, approver);
    }

    updateApprover(id: number, value: any): Observable<object> {
        return this.http.put(`${this.baseUrl}/${id}`, value);
    }

    deleteApprover(id: number): Observable<any> {
        return this.http.delete(`${this.baseUrl}/${id}`);
    }

    getApproverList(): Observable<any> {
        return this.http.get(`${this.baseUrl}/`);
    }

    getApproverById(identity: number): Observable<any> {
        return this.http.get(`${this.baseUrl}/id/${identity}/`);
    }

    getApproverByUser(user: number): Observable<any> {
        return this.http.get(`${this.baseUrl}/user/${user}/`);
    }

    deleteAll(): Observable<any> {
        return this.http.delete(`${this.baseUrl}/`);
    }
}
