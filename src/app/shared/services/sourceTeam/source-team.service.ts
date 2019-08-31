import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class SourceTeamService {

    private baseUrl = 'http://localhost:8000/sourceTeam';

    constructor(private http: HttpClient) { }

    createSourceTeam(sourceTeam: Object): Observable<object> {
        return this.http.post(`${this.baseUrl}/`, sourceTeam);
    }

    updateSourceTeam(id: number, value: any): Observable<object> {
        return this.http.put(`${this.baseUrl}/${id}`, value);
    }

    deleteSourceTeam(id: number): Observable<any> {
        return this.http.delete(`${this.baseUrl}/${id}`);
    }

    getSourceTeamList(): Observable<any> {
        return this.http.get(`${this.baseUrl}/`);
    }

    getSourceTeamById(identity: number): Observable<any> {
        return this.http.get(`${this.baseUrl}/id/${identity}/`);
    }

    deleteAll(): Observable<any> {
        return this.http.delete(`${this.baseUrl}/`);
    }
}
