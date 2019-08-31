import {Component, Input, OnInit} from '@angular/core';
import {Approver} from '../../../shared/models/approver';
import {ApproverService} from '../../../shared/services/approver/approver.service';
import {Observable} from 'rxjs';
import {Employee} from '../../../shared/models/employee';
import {EmployeeService} from '../../../shared/services/employee/employee.service';
import {Router} from '@angular/router';

@Component({
    selector: 'app-add-approver',
    templateUrl: './add-approver.component.html',
    styleUrls: ['./add-approver.component.scss']
})
export class AddApproverComponent implements OnInit {

    approver: Approver = new Approver();
    id: number;
    employees: Observable<Employee[]>;
    @Input() employee: Employee;
    submitted = false;

    constructor(private router: Router, private approverService: ApproverService, private employeeService: EmployeeService) { }

    ngOnInit() {
        this.reloadData();
    }
    newApprover(): void {
        this.submitted = false;
        this.approver = new Approver();
    }
    save() {
        this.approverService.createApprover(this.approver)
            .subscribe(
                data => {
                    console.log(data);
                    this.submitted = true;
                },
                error => alert('Already assigned !'));
        this.approver = new Approver();
    }

    onSubmit() {
        this.save();
    }

    reloadData() {
        this.employees = this.employeeService.getApproverEmployee();
    }
}
