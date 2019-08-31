import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class RegisterService {

    private baseUrl = 'http://localhost:8000/api/users';

    constructor(private http: HttpClient) { }

    createRegister(register: Object): Observable<object> {
        return this.http.post(`${this.baseUrl}/`, register);
    }

    updateRegister(id: number, value: any): Observable<object> {
        return this.http.put(`${this.baseUrl}/${id}`, value);
    }

    deleteRegister(id: number): Observable<any> {
        return this.http.delete(`${this.baseUrl}/${id}`);
    }

    getRegisterList(): Observable<any> {
        return this.http.get(`${this.baseUrl}/`);
    }

    getRegisterById(identity: number): Observable<any> {
        return this.http.get(`${this.baseUrl}/id/${identity}/`);
    }

    getRegisterByType(user_type: number): Observable<any> {
        return this.http.get(`${this.baseUrl}/type/${user_type}/`);
    }

    deleteAll(): Observable<any> {
        return this.http.delete(`${this.baseUrl}/`);
    }
}
