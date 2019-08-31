import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class SourceTypeService {

    private baseUrl = 'http://localhost:8000/sourceType';

    constructor(private http: HttpClient) { }

    createSourceType(sourceType: Object): Observable<object> {
        return this.http.post(`${this.baseUrl}/`, sourceType);
    }

    updateSourceType(id: number, value: any): Observable<object> {
        return this.http.put(`${this.baseUrl}/${id}`, value);
    }

    deleteSourceType(id: number): Observable<any> {
        return this.http.delete(`${this.baseUrl}/${id}`);
    }

    getSourceTypeList(): Observable<any> {
        return this.http.get(`${this.baseUrl}/`);
    }

    getSourceTypeById(identity: number): Observable<any> {
        return this.http.get(`${this.baseUrl}/id/${identity}/`);
    }

    deleteAll(): Observable<any> {
        return this.http.delete(`${this.baseUrl}/`);
    }
}
