import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class CountryService {

    private baseUrl = 'http://localhost:8000/country';

    constructor(private http: HttpClient) { }

    createCountry(country: Object): Observable<object> {
        return this.http.post(`${this.baseUrl}/`, country);
    }

    updateCountry(id: number, value: any): Observable<object> {
        return this.http.put(`${this.baseUrl}/${id}`, value);
    }

    deleteCountry(id: number): Observable<any> {
        return this.http.delete(`${this.baseUrl}/${id}`);
    }

    getCountryList(): Observable<any> {
        return this.http.get(`${this.baseUrl}/`);
    }

    getCountryById(identity: number): Observable<any> {
        return this.http.get(`${this.baseUrl}/id/${identity}/`);
    }

    deleteAll(): Observable<any> {
        return this.http.delete(`${this.baseUrl}/`);
    }
}
