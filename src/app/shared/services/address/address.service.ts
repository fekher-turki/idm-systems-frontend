import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class AddressService {

    private baseUrl = 'http://localhost:8000/address';

    constructor(private http: HttpClient) { }

    createAddress(address: Object): Observable<object> {
        return this.http.post(`${this.baseUrl}/`, address);
    }

    updateAddress(id: number, value: any): Observable<object> {
        return this.http.put(`${this.baseUrl}/${id}`, value);
    }

    deleteAddress(id: number): Observable<any> {
        return this.http.delete(`${this.baseUrl}/${id}`);
    }

    getAddressList(): Observable<any> {
        return this.http.get(`${this.baseUrl}/`);
    }

    getAddressById(identity: number): Observable<any> {
        return this.http.get(`${this.baseUrl}/id/${identity}/`);
    }

    deleteAll(): Observable<any> {
        return this.http.delete(`${this.baseUrl}/`);
    }
}
