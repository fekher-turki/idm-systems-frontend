import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class ClientService {

    private baseUrl = 'http://localhost:8000/client';

    constructor(private http: HttpClient) { }

    createClient(client: Object): Observable<object> {
        return this.http.post(`${this.baseUrl}/`, client);
    }

    updateClient(id: number, value: any): Observable<object> {
        return this.http.put(`${this.baseUrl}/${id}`, value);
    }

    deleteClient(id: number): Observable<any> {
        return this.http.delete(`${this.baseUrl}/${id}`);
    }

    getClientList(): Observable<any> {
        return this.http.get(`${this.baseUrl}/`);
    }

    getClientCount(): Observable<any> {
        return this.http.get(`${this.baseUrl}/count/`);
    }

    getClientById(identity: number): Observable<any> {
        return this.http.get(`${this.baseUrl}/id/${identity}/`);
    }

    deleteAll(): Observable<any> {
        return this.http.delete(`${this.baseUrl}/`);
    }
}
