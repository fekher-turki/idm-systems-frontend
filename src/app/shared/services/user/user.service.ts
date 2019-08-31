import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {RegisterService} from '../register/register.service';
import {Router} from '@angular/router';
import {EmployeeService} from '../employee/employee.service';

@Injectable()
export class UserService {

    // backend base url
    private baseUrl = 'http://localhost:8000/api/auth';

    // error messages received from the login attempt
    public errors: any = [];

    constructor(private http: HttpClient, private router: Router, private registerService: RegisterService,
                private employeeService: EmployeeService) {
    }

    // Uses http.post() to get an auth token from djangorestframework-jwt endpoint
    public login(user) {
        this.http.post(`${this.baseUrl}/`, user).subscribe(
            data => {
                this.updateData(data);
            },
            err => {
                this.errors = err['error'];
                alert('Try again with a valid login !');
            }
        );
    }

    public logout() {
        localStorage.clear();
        this.router.navigateByUrl('/login');
    }

    private updateData(data) {
        localStorage.setItem ('token', data.token);
        localStorage.setItem ('username', data.username);
        this.registerService.getRegisterById(data.username).subscribe(response => {
            localStorage.setItem ('role', response[0].user_type);
            this.employeeService.getEmployeeByUser(data.username).subscribe(res => {
                localStorage.setItem('authorized_approver', res[0].authorized_approver);
                });
            this.redirect();
        });
        this.errors = [];
    }

    redirect() {
        if (localStorage.getItem('role') == '1') {
            this.router.navigateByUrl('/admin');
        } else if (localStorage.getItem('role') == '2') {
            this.router.navigateByUrl('/financial');
        } else if (localStorage.getItem('role') == '3') {
            this.router.navigateByUrl('/user');
        }
    }

    public isAuthenticated(): boolean {
        const token = localStorage.getItem('token');
        // Check whether the token is expired and return
        // true or false
        if (token == null) {
            return false;
        } else {
            return true;
        }
    }

}
