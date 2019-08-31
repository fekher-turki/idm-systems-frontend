import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class DepartmentResponsibleService {

    private baseUrl = 'http://localhost:8000/departmentResponsible';

    constructor(private http: HttpClient) { }

    createDepartmentResponsible(departmentResponsible: Object): Observable<object> {
        return this.http.post(`${this.baseUrl}/`, departmentResponsible);
    }

    updateDepartmentResponsible(id: number, value: any): Observable<object> {
        return this.http.put(`${this.baseUrl}/${id}`, value);
    }

    deleteDepartmentResponsible(id: number): Observable<any> {
        return this.http.delete(`${this.baseUrl}/${id}`);
    }

    getDepartmentResponsibleList(): Observable<any> {
        return this.http.get(`${this.baseUrl}/`);
    }

    getDepartmentResponsibleById(identity: number): Observable<any> {
        return this.http.get(`${this.baseUrl}/id/${identity}/`);
    }

    deleteAll(): Observable<any> {
        return this.http.delete(`${this.baseUrl}/`);
    }
}
