import {Component, Input, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {User} from '../../shared/models/user';
import {RegisterService} from '../../shared/services/register/register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

    id: number;
    users: Observable<User[]>;
    @Input() user: User;

  constructor(private registerService: RegisterService) { }

  ngOnInit() {
      this.reloadData();
  }

  deleteRegister(id) {
      this.registerService.deleteRegister(id)
          .subscribe(
              data => {
                  console.log(data);
                  this.users = this.registerService.getRegisterList();
              },
              error => console.log(error));
  }

  deleteRegisters() {
      this.registerService.deleteAll()
          .subscribe(
              data => {
                  console.log(data);
                  this.reloadData();
              },
              error => console.log('ERROR: ' + error));
  }

  reloadData() {
      this.users = this.registerService.getRegisterList();
  }

}
