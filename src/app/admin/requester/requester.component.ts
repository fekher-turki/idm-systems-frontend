import {Component, Input, OnInit} from '@angular/core';
import { routerTransition } from '../../router.animations';
import {Observable} from 'rxjs';
import {RequesterService} from '../../shared/services/requester/requester.service';
import {Requester} from '../../shared/models/requester';

@Component({
    selector: 'app-requester',
    templateUrl: './requester.component.html',
    styleUrls: ['./requester.component.scss'],
    animations: [routerTransition()]
})
export class RequesterComponent implements OnInit {

    id: number;
    requesters: Observable<Requester[]>;
    @Input() requester: Requester;

    constructor(private requesterService: RequesterService) { }

    ngOnInit() {
        this.reloadData();
    }

    deleteRequester(id) {
        this.requesterService.deleteRequester(id)
            .subscribe(
                data => {
                    console.log(data);
                    this.requesters = this.requesterService.getRequesterList();
                },
                error => console.log(error));
    }

    deleteRequesters() {
        this.requesterService.deleteAll()
            .subscribe(
                data => {
                    console.log(data);
                    this.reloadData();
                },
                error => console.log('ERROR: ' + error));
    }

    reloadData() {
        this.requesters = this.requesterService.getRequesterList();
    }
}
