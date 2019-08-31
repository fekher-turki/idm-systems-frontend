import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router} from '@angular/router';
import {UserService} from '../services/user/user.service';

@Injectable({
    providedIn: 'root'
})
export class ApproverGuardService implements CanActivate {

    constructor(public userService: UserService, public router: Router) { }

    canActivate(route: ActivatedRouteSnapshot): boolean {
        // this will be passed from the route config
        // on the data property
        const expectedApprover = route.data.expectedApprover;
        const authorized_approver = localStorage.getItem('role') + localStorage.getItem('authorized_approver');
        if (
            !this.userService.isAuthenticated() ||
            authorized_approver !== expectedApprover
        ) {
            alert('You are not authorized!');
            return false;
        } else {
            return true;
        }
    }
}
