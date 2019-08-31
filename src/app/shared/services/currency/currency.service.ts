import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class CurrencyService {

    private baseUrl = 'http://localhost:8000/currency';

    constructor(private http: HttpClient) { }

    createCurrency(currency: Object): Observable<object> {
        return this.http.post(`${this.baseUrl}/`, currency);
    }

    updateCurrency(id: number, value: any): Observable<object> {
        return this.http.put(`${this.baseUrl}/${id}`, value);
    }

    deleteCurrency(id: number): Observable<any> {
        return this.http.delete(`${this.baseUrl}/${id}`);
    }

    getCurrencyList(): Observable<any> {
        return this.http.get(`${this.baseUrl}/`);
    }

    getCurrencyById(identity: number): Observable<any> {
        return this.http.get(`${this.baseUrl}/id/${identity}/`);
    }

    deleteAll(): Observable<any> {
        return this.http.delete(`${this.baseUrl}/`);
    }
}
