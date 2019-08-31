import { Component, OnInit } from '@angular/core';
import {ClientTypeService} from '../../../shared/services/clientType/client-type.service';
import {ClientType} from '../../../shared/models/clientType';

@Component({
    selector: 'app-add-client-type',
    templateUrl: './add-client-type.component.html',
    styleUrls: ['./add-client-type.component.scss']
})
export class AddClientTypeComponent implements OnInit {

    clientType: ClientType = new ClientType();
    submitted = false;

    constructor(private clientTypeService: ClientTypeService) { }

    ngOnInit() {
    }
    newClientType(): void {
        this.submitted = false;
        this.clientType = new ClientType();
    }
    save() {
        this.clientTypeService.createClientType(this.clientType)
            .subscribe(
                data => {
                    console.log(data);
                    this.submitted = true;
                },
                error => console.log(error));
        this.clientType = new ClientType();
    }

    onSubmit() {
        this.save();
    }
}
