import {Component, Input, OnInit} from '@angular/core';
import { routerTransition } from '../../router.animations';
import {Observable} from 'rxjs';
import {Currency} from '../../shared/models/currency';
import {CurrencyService} from '../../shared/services/currency/currency.service';

@Component({
    selector: 'app-currency',
    templateUrl: './currency.component.html',
    styleUrls: ['./currency.component.scss'],
    animations: [routerTransition()]
})
export class CurrencyComponent implements OnInit {

    id: number;
    currencies: Observable<Currency[]>;
    @Input() currency: Currency;

    constructor(private currencyService: CurrencyService) { }

    ngOnInit() {
        this.reloadData();
    }

    deleteCurrency(id) {
        this.currencyService.deleteCurrency(id)
            .subscribe(
                data => {
                    console.log(data);
                    this.currencies = this.currencyService.getCurrencyList();
                },
                error => console.log(error));
    }

    deleteCurrencies() {
        this.currencyService.deleteAll()
            .subscribe(
                data => {
                    console.log(data);
                    this.reloadData();
                },
                error => console.log('ERROR: ' + error));
    }

    reloadData() {
        this.currencies = this.currencyService.getCurrencyList();
    }
}
