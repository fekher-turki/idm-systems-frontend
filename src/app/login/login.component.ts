import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../router.animations';
import {UserService} from '../shared/services/user/user.service';
import {Router} from '@angular/router';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    animations: [routerTransition()],
})
export class LoginComponent implements OnInit {
    public user: any;
    constructor(private userService: UserService, private router: Router) {}

    ngOnInit() {
        this.user = {
            username: '',
            password: ''
        };
    }

    login() {
        this.userService.login(this.user);
    }
}
