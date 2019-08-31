import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class CategoryService {

    private baseUrl = 'http://localhost:8000/category';

    constructor(private http: HttpClient) { }

    createCategory(category: Object): Observable<object> {
        return this.http.post(`${this.baseUrl}/`, category);
    }

    updateCategory(id: number, value: any): Observable<object> {
        return this.http.put(`${this.baseUrl}/${id}`, value);
    }

    deleteCategory(id: number): Observable<any> {
        return this.http.delete(`${this.baseUrl}/${id}`);
    }

    getCategoryList(): Observable<any> {
        return this.http.get(`${this.baseUrl}/`);
    }

    getCategoryById(identity: number): Observable<any> {
        return this.http.get(`${this.baseUrl}/id/${identity}/`);
    }

    deleteAll(): Observable<any> {
        return this.http.delete(`${this.baseUrl}/`);
    }
}
