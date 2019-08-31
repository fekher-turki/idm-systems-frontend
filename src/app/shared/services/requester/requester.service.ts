import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class RequesterService {

    private baseUrl = 'http://localhost:8000/requester';

    constructor(private http: HttpClient) { }

    createRequester(requester: Object): Observable<object> {
        return this.http.post(`${this.baseUrl}/`, requester);
    }

    updateRequester(id: number, value: any): Observable<object> {
        return this.http.put(`${this.baseUrl}/${id}`, value);
    }

    deleteRequester(id: number): Observable<any> {
        return this.http.delete(`${this.baseUrl}/${id}`);
    }

    getRequesterList(): Observable<any> {
        return this.http.get(`${this.baseUrl}/`);
    }

    getRequesterById(identity: number): Observable<any> {
        return this.http.get(`${this.baseUrl}/id/${identity}/`);
    }

    deleteAll(): Observable<any> {
        return this.http.delete(`${this.baseUrl}/`);
    }
}
