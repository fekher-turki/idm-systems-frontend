import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class TeamService {

    private baseUrl = 'http://localhost:8000/team';

    constructor(private http: HttpClient) { }

    createTeam(team: Object): Observable<object> {
        return this.http.post(`${this.baseUrl}/`, team);
    }

    updateTeam(id: number, value: any): Observable<object> {
        return this.http.put(`${this.baseUrl}/${id}`, value);
    }

    deleteTeam(id: number): Observable<any> {
        return this.http.delete(`${this.baseUrl}/${id}`);
    }

    getTeamList(): Observable<any> {
        return this.http.get(`${this.baseUrl}/`);
    }

    getTeamById(identity: number): Observable<any> {
        return this.http.get(`${this.baseUrl}/id/${identity}/`);
    }

    deleteAll(): Observable<any> {
        return this.http.delete(`${this.baseUrl}/`);
    }
}
