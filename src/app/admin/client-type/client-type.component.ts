import {Component, Input, OnInit} from '@angular/core';
import { routerTransition } from '../../router.animations';
import {Observable} from 'rxjs';
import {ClientType} from '../../shared/models/clientType';
import {ClientTypeService} from '../../shared/services/clientType/client-type.service';

@Component({
    selector: 'app-client-type',
    templateUrl: './client-type.component.html',
    styleUrls: ['./client-type.component.scss'],
    animations: [routerTransition()]
})
export class ClientTypeComponent implements OnInit {

    id: number;
    clientTypes: Observable<ClientType[]>;
    @Input() clientType: ClientType;

    constructor(private clientTypeService: ClientTypeService) { }

    ngOnInit() {
        this.reloadData();
    }

    deleteClientType(id) {
        this.clientTypeService.deleteClientType(id)
            .subscribe(
                data => {
                    console.log(data);
                    this.clientTypes = this.clientTypeService.getClientTypeList();
                },
                error => console.log(error));
    }

    deleteClientTypes() {
        this.clientTypeService.deleteAll()
            .subscribe(
                data => {
                    console.log(data);
                    this.reloadData();
                },
                error => console.log('ERROR: ' + error));
    }

    reloadData() {
        this.clientTypes = this.clientTypeService.getClientTypeList();
    }
}
