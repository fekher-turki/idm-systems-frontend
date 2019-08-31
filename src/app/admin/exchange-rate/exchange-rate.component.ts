import {Component, Input, OnInit} from '@angular/core';
import { routerTransition } from '../../router.animations';
import {Observable} from 'rxjs';
import {ExchangeRate} from '../../shared/models/exchangeRate';
import {ExchangeRateService} from '../../shared/services/exchangeRate/exchange-rate.service';

@Component({
    selector: 'app-exchange-rate',
    templateUrl: './exchange-rate.component.html',
    styleUrls: ['./exchange-rate.component.scss'],
    animations: [routerTransition()]
})
export class ExchangeRateComponent implements OnInit {

    id: number;
    exchangeRates: Observable<ExchangeRate[]>;
    @Input() exchangeRate: ExchangeRate;

    constructor(private exchangeRateService: ExchangeRateService) { }

    ngOnInit() {
        this.reloadData();
    }

    deleteExchangeRate(id) {
        this.exchangeRateService.deleteExchangeRate(id)
            .subscribe(
                data => {
                    console.log(data);
                    this.exchangeRates = this.exchangeRateService.getExchangeRateList();
                },
                error => console.log(error));
    }

    deleteExchangeRates() {
        this.exchangeRateService.deleteAll()
            .subscribe(
                data => {
                    console.log(data);
                    this.reloadData();
                },
                error => console.log('ERROR: ' + error));
    }

    reloadData() {
        this.exchangeRates = this.exchangeRateService.getExchangeRateList();
    }
}
