import {Component, Input, OnInit} from '@angular/core';
import { routerTransition } from '../../router.animations';
import {Observable} from 'rxjs';
import {CountryService} from '../../shared/services/country/country.service';
import {Country} from '../../shared/models/country';

@Component({
    selector: 'app-country',
    templateUrl: './country.component.html',
    styleUrls: ['./country.component.scss'],
    animations: [routerTransition()]
})
export class CountryComponent implements OnInit {

    id: number;
    countries: Observable<Country[]>;
    @Input() country: Country;

    constructor(private countryService: CountryService) { }

    ngOnInit() {
        this.reloadData();
    }

    deleteCountry(id) {
        this.countryService.deleteCountry(id)
            .subscribe(
                data => {
                    console.log(data);
                    this.countries = this.countryService.getCountryList();
                },
                error => console.log(error));
    }

    deleteCountries() {
        this.countryService.deleteAll()
            .subscribe(
                data => {
                    console.log(data);
                    this.reloadData();
                },
                error => console.log('ERROR: ' + error));
    }

    reloadData() {
        this.countries = this.countryService.getCountryList();
    }
}
