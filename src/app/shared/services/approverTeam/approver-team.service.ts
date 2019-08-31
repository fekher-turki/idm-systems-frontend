import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class ApproverTeamService {

    private baseUrl = 'http://localhost:8000/approverTeam';

    constructor(private http: HttpClient) { }

    createApproverTeam(approverTeam: Object): Observable<object> {
        return this.http.post(`${this.baseUrl}/`, approverTeam);
    }

    updateApproverTeam(id: number, value: any): Observable<object> {
        return this.http.put(`${this.baseUrl}/${id}`, value);
    }

    deleteApproverTeam(id: number): Observable<any> {
        return this.http.delete(`${this.baseUrl}/${id}`);
    }

    getApproverTeamList(): Observable<any> {
        return this.http.get(`${this.baseUrl}/`);
    }

    getApproverTeamById(identity: number): Observable<any> {
        return this.http.get(`${this.baseUrl}/id/${identity}/`);
    }

    deleteAll(): Observable<any> {
        return this.http.delete(`${this.baseUrl}/`);
    }
}
