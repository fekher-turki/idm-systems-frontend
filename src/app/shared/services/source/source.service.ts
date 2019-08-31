import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class SourceService {

    private baseUrl = 'http://localhost:8000/source';

    constructor(private http: HttpClient) { }

    createSource(source: Object): Observable<object> {
        return this.http.post(`${this.baseUrl}/`, source);
    }

    updateSource(id: number, value: any): Observable<object> {
        return this.http.put(`${this.baseUrl}/${id}`, value);
    }

    deleteSource(id: number): Observable<any> {
        return this.http.delete(`${this.baseUrl}/${id}`);
    }

    getSourceList(): Observable<any> {
        return this.http.get(`${this.baseUrl}/`);
    }

    getSourceById(identity: number): Observable<any> {
        return this.http.get(`${this.baseUrl}/id/${identity}/`);
    }

    deleteAll(): Observable<any> {
        return this.http.delete(`${this.baseUrl}/`);
    }
}
