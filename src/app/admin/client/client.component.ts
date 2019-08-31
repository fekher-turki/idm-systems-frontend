import {Component, Input, OnInit} from '@angular/core';
import { routerTransition } from '../../router.animations';
import {Observable} from 'rxjs';
import {ClientService} from '../../shared/services/client/client.service';
import {Client} from '../../shared/models/client';


@Component({
    selector: 'app-client',
    templateUrl: './client.component.html',
    styleUrls: ['./client.component.scss'],
    animations: [routerTransition()]
})
export class ClientComponent implements OnInit {

    id: number;
    clients: Observable<Client[]>;
    @Input() client: Client;

    constructor(private clientService: ClientService) { }

    ngOnInit() {
        this.reloadData();
    }

    deleteClient(id) {
        this.clientService.deleteClient(id)
            .subscribe(
                data => {
                    console.log(data);
                    this.clients = this.clientService.getClientList();
                },
                error => console.log(error));
    }

    deleteClients() {
        this.clientService.deleteAll()
            .subscribe(
                data => {
                    console.log(data);
                    this.reloadData();
                },
                error => console.log('ERROR: ' + error));
    }

    reloadData() {
        this.clients = this.clientService.getClientList();
    }
}
