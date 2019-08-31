import {Component, Input, OnInit} from '@angular/core';
import {Requester} from '../../../shared/models/requester';
import {RequesterService} from '../../../shared/services/requester/requester.service';
import {Observable} from 'rxjs';
import {Employee} from '../../../shared/models/employee';
import {EmployeeService} from '../../../shared/services/employee/employee.service';
import {Router} from '@angular/router';

@Component({
    selector: 'app-add-requester',
    templateUrl: './add-requester.component.html',
    styleUrls: ['./add-requester.component.scss']
})
export class AddRequesterComponent implements OnInit {

    requester: Requester = new Requester();
    id: number;
    employees: Observable<Employee[]>;
    @Input() employee: Employee;
    submitted = false;

    constructor(private router: Router, private requesterService: RequesterService, private employeeService: EmployeeService) { }

    ngOnInit() {
        this.reloadData();
    }
    newRequester(): void {
        this.submitted = false;
        this.requester = new Requester();
    }
    save() {
        this.requesterService.createRequester(this.requester)
            .subscribe(
                data => {
                    console.log(data);
                    this.submitted = true;
                },
                error => alert('Already assigned !'));
        this.requester = new Requester();
    }

    onSubmit() {
        this.save();
    }

    reloadData() {
        this.employees = this.employeeService.getEmployeeList();
    }
}
