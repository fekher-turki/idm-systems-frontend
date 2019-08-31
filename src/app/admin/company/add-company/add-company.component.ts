import {Component, Input, OnInit} from '@angular/core';
import {Company} from '../../../shared/models/company';
import {CompanyService} from '../../../shared/services/company/company.service';
import {Observable} from 'rxjs';
import {Country} from '../../../shared/models/country';
import {CountryService} from '../../../shared/services/country/country.service';
import {Router} from '@angular/router';

@Component({
    selector: 'app-add-company',
    templateUrl: './add-company.component.html',
    styleUrls: ['./add-company.component.scss']
})
export class AddCompanyComponent implements OnInit {

    company: Company = new Company();
    id: number;
    countries: Observable<Country[]>;
    @Input() country: Country;
    submitted = false;

    constructor(private router: Router, private countryService: CountryService, private companyService: CompanyService) { }

    ngOnInit() {
        this.reloadData();
    }
    newCompany(): void {
        this.submitted = false;
        this.company = new Company();
    }
    save() {
        this.companyService.createCompany(this.company)
            .subscribe(
                data => {
                    console.log(data);
                    this.submitted = true;
                },
                error => console.log(error));
        this.company = new Company();
    }

    onSubmit() {
        this.save();
    }

    reloadData() {
        this.countries = this.countryService.getCountryList();
    }
}
