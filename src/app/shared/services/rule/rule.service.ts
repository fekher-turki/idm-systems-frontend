import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class RuleService {

    private baseUrl = 'http://localhost:8000/rule';

    constructor(private http: HttpClient) { }

    createRule(rule: Object): Observable<object> {
        return this.http.post(`${this.baseUrl}/`, rule);
    }

    updateRule(id: number, value: any): Observable<object> {
        return this.http.put(`${this.baseUrl}/${id}`, value);
    }

    deleteRule(id: number): Observable<any> {
        return this.http.delete(`${this.baseUrl}/${id}`);
    }

    getRuleList(): Observable<any> {
        return this.http.get(`${this.baseUrl}/`);
    }

    getRuleById(identity: number): Observable<any> {
        return this.http.get(`${this.baseUrl}/id/${identity}/`);
    }

    deleteAll(): Observable<any> {
        return this.http.delete(`${this.baseUrl}/`);
    }
}
