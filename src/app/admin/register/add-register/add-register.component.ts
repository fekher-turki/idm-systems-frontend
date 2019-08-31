import { Component, OnInit } from '@angular/core';
import {User} from '../../../shared/models/user';
import {RegisterService} from '../../../shared/services/register/register.service';

@Component({
  selector: 'app-add-register',
  templateUrl: './add-register.component.html',
  styleUrls: ['./add-register.component.scss']
})
export class AddRegisterComponent implements OnInit {

    user: User = new User();
    submitted = false;

  constructor(private registerService: RegisterService) { }

  ngOnInit() {
  }
    newRegister(): void {
        this.submitted = false;
        this.user = new User();
    }
    save() {
        this.registerService.createRegister(this.user)
            .subscribe(
                response => {
                    console.log('user' + this.user.username + ' has been created!');
                    this.submitted = true;
                },
                error => console.log(error));
        this.user = new User();
    }

    onSubmit() {
        this.save();
    }

}
