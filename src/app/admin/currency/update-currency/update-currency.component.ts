import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, NgForm, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {CurrencyService} from '../../../shared/services/currency/currency.service';

@Component({
    selector: 'app-update-currency',
    templateUrl: './update-currency.component.html',
    styleUrls: ['./update-currency.component.scss']
})
export class UpdateCurrencyComponent implements OnInit {
    currencyForm: FormGroup;
    _id: number = null;
    submitted = false;
    alertmsg: string;
    alertcolor: string;

    // tslint:disable-next-line:max-line-length
    constructor(private currencyService: CurrencyService, private router: Router, private route: ActivatedRoute, private formBuilder: FormBuilder) { }

    ngOnInit() {
        this.getProduct(this.route.snapshot.params['id']);
        this.currencyForm = this.formBuilder.group({
            'id' : [null, Validators.required],
            'code' : [null, Validators.required],
            'description' : [null, Validators.required],
            'decimal_place' : [null, Validators.required],
            'symbol' : [null, Validators.required],
        });
    }

    getProduct(id) {
        this.currencyService.getCurrencyById(id)
            .subscribe(data => {
                this._id = data[0].id;
                this.currencyForm.setValue({
                    id: data[0].id,
                    code: data[0].code,
                    description: data[0].description,
                    decimal_place: data[0].decimal_place,
                    symbol: data[0].symbol,
                });
            });
    }

    onSubmit(form: NgForm) {
        this.currencyService.updateCurrency(this._id, form)
            .subscribe(
                data => {
                    console.log(data);
                    this.submitted = true;
                    this.alertmsg = 'Currency updated!';
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
