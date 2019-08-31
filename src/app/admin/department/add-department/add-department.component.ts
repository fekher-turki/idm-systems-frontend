import {Component, Input, OnInit} from '@angular/core';
import {Department} from '../../../shared/models/department';
import {DepartmentService} from '../../../shared/services/department/department.service';
import {Observable} from 'rxjs';
import {Company} from '../../../shared/models/company';
import {CompanyService} from '../../../shared/services/company/company.service';

@Component({
    selector: 'app-add-department',
    templateUrl: './add-department.component.html',
    styleUrls: ['./add-department.component.scss']
})
export class AddDepartmentComponent implements OnInit {

    department: Department = new Department();
    companies: Observable<Company[]>;
    @Input() company: Company;
    submitted = false;

    constructor(private departmentService: DepartmentService, private companyService: CompanyService) { }

    ngOnInit() {
        this.reloadData();
    }
    newDepartment(): void {
        this.submitted = false;
        this.department = new Department();
    }
    save() {
        this.departmentService.createDepartment(this.department)
            .subscribe(
                data => {
                    console.log(data);
                    this.submitted = true;
                },
                error => console.log(error));
        this.department = new Department();
    }

    onSubmit() {
        this.save();
    }

    reloadData() {
        this.companies = this.companyService.getCompanyList();
    }
}
