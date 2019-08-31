import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, NgForm, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {ClientService} from '../../../shared/services/client/client.service';
import {Observable} from 'rxjs';
import {ClientType} from '../../../shared/models/clientType';
import {ClientTypeService} from '../../../shared/services/clientType/client-type.service';
import {CountryService} from '../../../shared/services/country/country.service';
import {Country} from '../../../shared/models/country';
@Component({
    selector: 'app-update-client',
    templateUrl: './update-client.component.html',
    styleUrls: ['./update-client.component.scss']
})
export class UpdateClientComponent implements OnInit {
    clientForm: FormGroup;
    countries: Observable<Country[]>;
    @Input() country: Country;
    clientTypes: Observable<ClientType[]>;
    @Input() clientType: ClientType;
    _id: number = null;
    submitted = false;
    alertmsg: string;
    alertcolor: string;

    // tslint:disable-next-line:max-line-length
    constructor(private clientTypeService: ClientTypeService, private countryService: CountryService, private clientService: ClientService, private router: Router, private route: ActivatedRoute, private formBuilder: FormBuilder) { }

    ngOnInit() {
        this.getClient(this.route.snapshot.params['id']);
        this.clientForm = this.formBuilder.group({
            'id' : [null, Validators.required],
            'code' : [null, Validators.required],
            'name' : [null, Validators.required],
            'fiscal_number' : [null, Validators.required],
            'vat_number' : [null, Validators.required],
            'clientType' : [null, Validators.required],
            'tel_number' : [null, Validators.required],
            'email' : [null, Validators.required],
            'address1' : [null, Validators.required],
            'address2' : [null, Validators.required],
            'zip_code' : [null, Validators.required],
            'city' : [null, Validators.required],
            'country' : [null, Validators.required],
        });
        this.reloadData();
    }

    getClient(id) {
        this.clientService.getClientById(id)
            .subscribe(data => {
                this._id = data[0].id;
                this.clientForm.setValue({
                    id: data[0].id,
                    code: data[0].code,
                    name: data[0].name,
                    fiscal_number: data[0].fiscal_number,
                    vat_number: data[0].vat_number,
                    clientType: data[0].clientType,
                    tel_number: data[0].tel_number,
                    email: data[0].email,
                    address1: data[0].address1,
                    address2: data[0].address2,
                    zip_code: data[0].zip_code,
                    city: data[0].city,
                    country: data[0].country,
                });
            });
    }

    onSubmit(form: NgForm) {
        this.clientService.updateClient(this._id, form)
            .subscribe(
                data => {
                    console.log(data);
                    this.submitted = true;
                    this.alertmsg = 'Client updated!';
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
        this.clientTypes = this.clientTypeService.getClientTypeList();
        this.countries = this.countryService.getCountryList();
    }

    addClientType() {
        this.router.navigate(['admin/clientTypes/addClientType']);
    }

    compareFn(c1: any, c2: any): boolean {
        return c1 && c2 ? c1.id === c2.id : c1 === c2;
    }
}
