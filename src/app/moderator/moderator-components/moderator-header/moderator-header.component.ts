import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import {UserService} from '../../../shared/services/user/user.service';
import {RegisterService} from '../../../shared/services/register/register.service';

@Component({
    selector: 'app-moderator-header',
    templateUrl: './moderator-header.component.html',
    styleUrls: ['./moderator-header.component.scss']
})
export class ModeratorHeaderComponent implements OnInit {
    public pushRightClass: string;
    username: string;

    constructor(private userService: UserService, private registerService: RegisterService,
                private translate: TranslateService, public router: Router) {

        this.router.events.subscribe(val => {
            if (
                val instanceof NavigationEnd &&
                window.innerWidth <= 992 &&
                this.isToggled()
            ) {
                this.toggleSidebar();
            }
        });
    }

    ngOnInit() {
        this.pushRightClass = 'push-right';
        this.registerService.getRegisterById(parseInt(localStorage.getItem('username'), 10)).subscribe(data => {
            this.username = data[0].username;
        });
    }

    isToggled(): boolean {
        const dom: Element = document.querySelector('body');
        return dom.classList.contains(this.pushRightClass);
    }

    toggleSidebar() {
        const dom: any = document.querySelector('body');
        dom.classList.toggle(this.pushRightClass);
    }

    rltAndLtr() {
        const dom: any = document.querySelector('body');
        dom.classList.toggle('rtl');
    }

    onLoggedout() {
        this.userService.logout();
    }

    changeLang(language: string) {
        this.translate.use(language);
    }
}
