import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class RequesterTeamService {

    private baseUrl = 'http://localhost:8000/requesterTeam';

    constructor(private http: HttpClient) { }

    createRequesterTeam(requesterTeam: Object): Observable<object> {
        return this.http.post(`${this.baseUrl}/`, requesterTeam);
    }

    updateRequesterTeam(id: number, value: any): Observable<object> {
        return this.http.put(`${this.baseUrl}/${id}`, value);
    }

    deleteRequesterTeam(id: number): Observable<any> {
        return this.http.delete(`${this.baseUrl}/${id}`);
    }

    getRequesterTeamList(): Observable<any> {
        return this.http.get(`${this.baseUrl}/`);
    }

    getRequesterTeamById(identity: number): Observable<any> {
        return this.http.get(`${this.baseUrl}/id/${identity}/`);
    }

    deleteAll(): Observable<any> {
        return this.http.delete(`${this.baseUrl}/`);
    }
}
