import {Component, Input, OnInit} from '@angular/core';
import {Client} from '../../../shared/models/client';
import {ClientService} from '../../../shared/services/client/client.service';
import {Observable} from 'rxjs';
import {Country} from '../../../shared/models/country';
import {CountryService} from '../../../shared/services/country/country.service';
import {ClientType} from '../../../shared/models/clientType';
import {ClientTypeService} from '../../../shared/services/clientType/client-type.service';
import {Router} from '@angular/router';

@Component({
    selector: 'app-add-client',
    templateUrl: './add-client.component.html',
    styleUrls: ['./add-client.component.scss']
})
export class AddClientComponent implements OnInit {

    client: Client = new Client();
    id: number;
    countries: Observable<Country[]>;
    @Input() country: Country;
    clientTypes: Observable<ClientType[]>;
    @Input() clientType: ClientTypes;
    submitted = false;

    // tslint:disable-next-line:max-line-length
    constructor(private router: Router, private clientTypeService: ClientTypeService, private countryService: CountryService, private clientService: ClientService) { }

    ngOnInit() {
        this.reloadData();
    }
    newClient(): void {
        this.submitted = false;
        this.client = new Client();
    }
    save() {
        this.clientService.createClient(this.client)
            .subscribe(
                data => {
                    console.log(data);
                    this.submitted = true;
                },
                error => console.log(error));
        this.client = new Client();
    }

    onSubmit() {
        this.save();
    }

    reloadData() {
        this.countries = this.countryService.getCountryList();
        this.clientTypes = this.clientTypeService.getClientTypeList();
    }

    addClientType() {
        this.router.navigate(['admin/clientTypes/addClientType']);
    }
}
