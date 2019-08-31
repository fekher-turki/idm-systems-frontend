import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, NgForm, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {ExchangeRateService} from '../../../shared/services/exchangeRate/exchange-rate.service';
import {CurrencyService} from '../../../shared/services/currency/currency.service';
import {Observable} from 'rxjs';
import {Currency} from '../../../shared/models/currency';

@Component({
    selector: 'app-update-exchange-rate',
    templateUrl: './update-exchange-rate.component.html',
    styleUrls: ['./update-exchange-rate.component.scss']
})
export class UpdateExchangeRateComponent implements OnInit {
    exchangeRateForm: FormGroup;
    currencies: Observable<Currency[]>;
    @Input() currency: Currency;
    _id: number = null;
    submitted = false;
    alertmsg: string;
    alertcolor: string;

    // tslint:disable-next-line:max-line-length
    constructor(private exchangeRateService: ExchangeRateService, private currencyService: CurrencyService, private router: Router, private route: ActivatedRoute, private formBuilder: FormBuilder) { }

    ngOnInit() {
        this.getProduct(this.route.snapshot.params['id']);
        this.exchangeRateForm = this.formBuilder.group({
            'id' : [null, Validators.required],
            'currency' : [null, Validators.required],
            'value' : [null, Validators.required],
            'date' : [null, Validators.required],
        });
    }

    getProduct(id) {
        this.exchangeRateService.getExchangeRateById(id)
            .subscribe(data => {
                this._id = data[0].id;
                this.exchangeRateForm.setValue({
                    id: data[0].id,
                    currency: data[0].currency,
                    value: data[0].value,
                    date: data[0].date,
                });
            });
        this.reloadData();
    }

    onSubmit(form: NgForm) {
        this.exchangeRateService.updateExchangeRate(this._id, form)
            .subscribe(
                data => {
                    console.log(data);
                    this.submitted = true;
                    this.alertmsg = 'ExchangeRate updated!';
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
        this.currencies = this.currencyService.getCurrencyList();
    }

    compareFn(c1: any, c2: any): boolean {
        return c1 && c2 ? c1.id === c2.id : c1 === c2;
    }
}
