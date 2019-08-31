import { Component, OnInit } from '@angular/core';
import {CurrencyService} from '../../../shared/services/currency/currency.service';
import {Currency} from '../../../shared/models/currency';

@Component({
    selector: 'app-add-currency',
    templateUrl: './add-currency.component.html',
    styleUrls: ['./add-currency.component.scss']
})
export class AddCurrencyComponent implements OnInit {

    currency: Currency = new Currency();
    submitted = false;

    constructor(private currencyService: CurrencyService) { }

    ngOnInit() {
    }
    newCurrency(): void {
        this.submitted = false;
        this.currency = new Currency();
    }
    save() {
        this.currencyService.createCurrency(this.currency)
            .subscribe(
                data => {
                    console.log(data);
                    this.submitted = true;
                },
                error => console.log(error));
        this.currency = new Currency();
    }

    onSubmit() {
        this.save();
    }
}
