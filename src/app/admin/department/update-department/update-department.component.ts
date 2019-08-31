import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, NgForm, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {DepartmentService} from '../../../shared/services/department/department.service';
import {Observable} from 'rxjs';
import {Company} from '../../../shared/models/company';
import {CompanyService} from '../../../shared/services/company/company.service';

@Component({
    selector: 'app-update-department',
    templateUrl: './update-department.component.html',
    styleUrls: ['./update-department.component.scss']
})
export class UpdateDepartmentComponent implements OnInit {
    departmentForm: FormGroup;
    companies: Observable<Company[]>;
    @Input() company: Company;
    _id: number = null;
    submitted = false;
    alertmsg: string;
    alertcolor: string;

    // tslint:disable-next-line:max-line-length
    constructor(private departmentService: DepartmentService, private companyService: CompanyService, private router: Router, private route: ActivatedRoute, private formBuilder: FormBuilder) { }

    ngOnInit() {
        this.getDepartment(this.route.snapshot.params['id']);
        this.departmentForm = this.formBuilder.group({
            'id' : [null, Validators.required],
            'code' : [null, Validators.required],
            'name' : [null, Validators.required],
            'company' : [null, Validators.required],
        });
        this.reloadData();
    }

    getDepartment(id) {
        this.departmentService.getDepartmentById(id)
            .subscribe(data => {
                this._id = data[0].id;
                this.departmentForm.setValue({
                    id: data[0].id,
                    code: data[0].code,
                    name: data[0].name,
                    company: data[0].company,
                });
            });
    }

    onSubmit(form: NgForm) {
        this.departmentService.updateDepartment(this._id, form)
            .subscribe(
                data => {
                    this.submitted = true;
                    this.alertmsg = 'Department updated!';
                    this.alertcolor = 'alert-success';
                },
                error => console.log(error));
        this.alertmsg = 'Error occurred!';
        this.alertcolor = 'alert-warning';
    }

    closeAlert() {
        this.submitted = false;
    }

    reloadData() {
        this.companies = this.companyService.getCompanyList();
    }

    compareFn(c1: any, c2: any): boolean {
        return c1 && c2 ? c1.id === c2.id : c1 === c2;
    }
}
