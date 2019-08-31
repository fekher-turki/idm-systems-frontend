import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class ClientTypeService {

    private baseUrl = 'http://localhost:8000/clientType';

    constructor(private http: HttpClient) { }

    createClientType(clientType: Object): Observable<object> {
        return this.http.post(`${this.baseUrl}/`, clientType);
    }

    updateClientType(id: number, value: any): Observable<object> {
        return this.http.put(`${this.baseUrl}/${id}`, value);
    }

    deleteClientType(id: number): Observable<any> {
        return this.http.delete(`${this.baseUrl}/${id}`);
    }

    getClientTypeList(): Observable<any> {
        return this.http.get(`${this.baseUrl}/`);
    }

    getClientTypeById(identity: number): Observable<any> {
        return this.http.get(`${this.baseUrl}/id/${identity}/`);
    }

    deleteAll(): Observable<any> {
        return this.http.delete(`${this.baseUrl}/`);
    }
}
