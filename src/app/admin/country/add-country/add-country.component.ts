import { Component, OnInit } from '@angular/core';
import {Country} from '../../../shared/models/country';
import {CountryService} from '../../../shared/services/country/country.service';

@Component({
    selector: 'app-add-country',
    templateUrl: './add-country.component.html',
    styleUrls: ['./add-country.component.scss']
})
export class AddCountryComponent implements OnInit {

    country: Country = new Country();
    submitted = false;

    constructor(private countryService: CountryService) { }

    ngOnInit() {
    }
    newCountry(): void {
        this.submitted = false;
        this.country = new Country();
    }
    save() {
        this.countryService.createCountry(this.country)
            .subscribe(
                data => {
                    console.log(data);
                    this.submitted = true;
                },
                error => console.log(error));
        this.country = new Country();
    }

    onSubmit() {
        this.save();
    }
}
