import {Component, Input, OnInit} from '@angular/core';
import {ExchangeRateService} from '../../../shared/services/exchangeRate/exchange-rate.service';
import {ExchangeRate} from '../../../shared/models/exchangeRate';
import {CurrencyService} from '../../../shared/services/currency/currency.service';
import {Observable} from 'rxjs';
import {Currency} from '../../../shared/models/currency';

@Component({
    selector: 'app-add-exchange-rate',
    templateUrl: './add-exchange-rate.component.html',
    styleUrls: ['./add-exchange-rate.component.scss']
})
export class AddExchangeRateComponent implements OnInit {

    exchangeRate: ExchangeRate = new ExchangeRate();
    currencies: Observable<Currency[]>;
    @Input() currency: Currency;
    submitted = false;

    constructor(private exchangeRateService: ExchangeRateService, private currencyService: CurrencyService) { }

    ngOnInit() {
        this.reloadData();
    }
    newExchangeRate(): void {
        this.submitted = false;
        this.exchangeRate = new ExchangeRate();
    }
    save() {
        this.exchangeRateService.createExchangeRate(this.exchangeRate)
            .subscribe(
                data => {
                    console.log(data);
                    this.submitted = true;
                },
                error => console.log(error));
        this.exchangeRate = new ExchangeRate();
    }

    onSubmit() {
        this.save();
    }

    reloadData() {
        this.currencies = this.currencyService.getCurrencyList();
    }
}
