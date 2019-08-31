import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router} from '@angular/router';
import {UserService} from '../services/user/user.service';

@Injectable({
  providedIn: 'root'
})
export class RoleGuardService implements CanActivate {

  constructor(public userService: UserService, public router: Router) { }

    canActivate(route: ActivatedRouteSnapshot): boolean {
        // this will be passed from the route config
        // on the data property
        const expectedRole = route.data.expectedRole;
        const role = localStorage.getItem('role');
        // decode the token to get its payload
        if (
            !this.userService.isAuthenticated() ||
            role !== expectedRole
        ) {
            this.router.navigate(['/login']);
            return false;
        } else {
            return true;
        }
    }
}
