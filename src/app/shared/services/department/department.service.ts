import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class DepartmentService {

    private baseUrl = 'http://localhost:8000/department';

    constructor(private http: HttpClient) { }

    createDepartment(department: Object): Observable<object> {
        return this.http.post(`${this.baseUrl}/`, department);
    }

    updateDepartment(id: number, value: any): Observable<object> {
        return this.http.put(`${this.baseUrl}/${id}`, value);
    }

    deleteDepartment(id: number): Observable<any> {
        return this.http.delete(`${this.baseUrl}/${id}`);
    }

    getDepartmentList(): Observable<any> {
        return this.http.get(`${this.baseUrl}/`);
    }

    getDepartmentById(identity: number): Observable<any> {
        return this.http.get(`${this.baseUrl}/id/${identity}/`);
    }

    deleteAll(): Observable<any> {
        return this.http.delete(`${this.baseUrl}/`);
    }
}
