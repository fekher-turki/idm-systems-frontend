import {Component, Input, OnInit} from '@angular/core';
import { routerTransition } from '../../router.animations';
import {Observable} from 'rxjs';
import {CompanyService} from '../../shared/services/company/company.service';
import {Company} from '../../shared/models/company';


@Component({
    selector: 'app-company',
    templateUrl: './company.component.html',
    styleUrls: ['./company.component.scss'],
    animations: [routerTransition()]
})
export class CompanyComponent implements OnInit {

    id: number;
    companies: Observable<Company[]>;
    @Input() company: Company;

    constructor(private companyService: CompanyService) { }

    ngOnInit() {
        this.reloadData();
    }

    deleteCompany(id) {
        this.companyService.deleteCompany(id)
            .subscribe(
                data => {
                    console.log(data);
                    this.companies = this.companyService.getCompanyList();
                },
                error => console.log(error));
    }

    deleteCompanies() {
        this.companyService.deleteAll()
            .subscribe(
                data => {
                    console.log(data);
                    this.reloadData();
                },
                error => console.log('ERROR: ' + error));
    }

    reloadData() {
        this.companies = this.companyService.getCompanyList();
    }
}
