import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, NgForm, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {CompanyService} from '../../../shared/services/company/company.service';
import {Observable} from 'rxjs';
import {CountryService} from '../../../shared/services/country/country.service';
import {Country} from '../../../shared/models/country';

@Component({
    selector: 'app-update-company',
    templateUrl: './update-company.component.html',
    styleUrls: ['./update-company.component.scss']
})
export class UpdateCompanyComponent implements OnInit {
    companyForm: FormGroup;
    countries: Observable<Country[]>;
    @Input() country: Country;
    _id: number = null;
    submitted = false;
    alertmsg: string;
    alertcolor: string;

    // tslint:disable-next-line:max-line-length
    constructor(private companyService: CompanyService, private countryService: CountryService, private router: Router, private route: ActivatedRoute, private formBuilder: FormBuilder) { }

    ngOnInit() {
        this.getCompany(this.route.snapshot.params['id']);
        this.companyForm = this.formBuilder.group({
            'id' : [null, Validators.required],
            'code' : [null, Validators.required],
            'name' : [null, Validators.required],
            'fiscal_number' : [null, Validators.required],
            'vat_number' : [null, Validators.required],
            'tel_number' : [null, Validators.required],
            'email' : [null, Validators.required],
            'address1' : [null, Validators.required],
            'address2' : [null, Validators.required],
            'zip_code' : [null, Validators.required],
            'city' : [null, Validators.required],
            'country' : [null, Validators.required],
        });
        this.reloadData();
    }

    getCompany(id) {
        this.companyService.getCompanyById(id)
            .subscribe(data => {
                this._id = data[0].id;
                this.companyForm.setValue({
                    id: data[0].id,
                    code: data[0].code,
                    name: data[0].name,
                    fiscal_number: data[0].fiscal_number,
                    vat_number: data[0].vat_number,
                    tel_number: data[0].tel_number,
                    email: data[0].email,
                    address1: data[0].address1,
                    address2: data[0].address2,
                    zip_code: data[0].zip_code,
                    city: data[0].city,
                    country: data[0].country,
                });
            });
    }

    onSubmit(form: NgForm) {
        this.companyService.updateCompany(this._id, form)
            .subscribe(
                data => {
                    console.log(data);
                    this.submitted = true;
                    this.alertmsg = 'Company updated!';
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
        this.countries = this.countryService.getCountryList();
    }

    compareFn(c1: any, c2: any): boolean {
        return c1 && c2 ? c1.id === c2.id : c1 === c2;
    }
}
