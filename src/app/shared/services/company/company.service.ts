import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class CompanyService {

    private baseUrl = 'http://localhost:8000/company';

    constructor(private http: HttpClient) { }

    createCompany(company: Object): Observable<object> {
        return this.http.post(`${this.baseUrl}/`, company);
    }

    updateCompany(id: number, value: any): Observable<object> {
        return this.http.put(`${this.baseUrl}/${id}`, value);
    }

    deleteCompany(id: number): Observable<any> {
        return this.http.delete(`${this.baseUrl}/${id}`);
    }

    getCompanyList(): Observable<any> {
        return this.http.get(`${this.baseUrl}/`);
    }

    getCompanyCount(): Observable<any> {
        return this.http.get(`${this.baseUrl}/count/`);
    }

    getCompanyById(identity: number): Observable<any> {
        return this.http.get(`${this.baseUrl}/id/${identity}/`);
    }

    deleteAll(): Observable<any> {
        return this.http.delete(`${this.baseUrl}/`);
    }
}
