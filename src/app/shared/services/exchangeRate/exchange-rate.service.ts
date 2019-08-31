import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class ExchangeRateService {

    private baseUrl = 'http://localhost:8000/exchangeRate';

    constructor(private http: HttpClient) { }

    createExchangeRate(exchangeRate: Object): Observable<object> {
        return this.http.post(`${this.baseUrl}/`, exchangeRate);
    }

    updateExchangeRate(id: number, value: any): Observable<object> {
        return this.http.put(`${this.baseUrl}/${id}`, value);
    }

    deleteExchangeRate(id: number): Observable<any> {
        return this.http.delete(`${this.baseUrl}/${id}`);
    }

    getExchangeRateList(): Observable<any> {
        return this.http.get(`${this.baseUrl}/`);
    }

    getExchangeRateById(identity: number): Observable<any> {
        return this.http.get(`${this.baseUrl}/id/${identity}/`);
    }

    deleteAll(): Observable<any> {
        return this.http.delete(`${this.baseUrl}/`);
    }
}
