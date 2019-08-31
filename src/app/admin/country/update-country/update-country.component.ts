import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, NgForm, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {CountryService} from '../../../shared/services/country/country.service';

@Component({
    selector: 'app-update-country',
    templateUrl: './update-country.component.html',
    styleUrls: ['./update-country.component.scss']
})
export class UpdateCountryComponent implements OnInit {
    countryForm: FormGroup;
    _id: number = null;
    submitted = false;
    alertmsg: string;
    alertcolor: string;

    // tslint:disable-next-line:max-line-length
    constructor(private countryService: CountryService, private router: Router, private route: ActivatedRoute, private formBuilder: FormBuilder) { }

    ngOnInit() {
        this.getProduct(this.route.snapshot.params['id']);
        this.countryForm = this.formBuilder.group({
            'id' : [null, Validators.required],
            'code' : [null, Validators.required],
            'name' : [null, Validators.required],
        });
    }

    getProduct(id) {
        this.countryService.getCountryById(id)
            .subscribe(data => {
                this._id = data[0].id;
                this.countryForm.setValue({
                    id: data[0].id,
                    code: data[0].code,
                    name: data[0].name,
                });
            });
    }

    onSubmit(form: NgForm) {
        this.countryService.updateCountry(this._id, form)
            .subscribe(
                data => {
                    console.log(data);
                    this.submitted = true;
                    this.alertmsg = 'Country updated!';
                    this.alertcolor = 'alert-success';
                },
                error => console.log(error));
        this.alertmsg = 'Error occurred!';
        this.alertcolor = 'alert-warning';
    }

    closeAlert() {
        this.submitted = false;
    }
}
