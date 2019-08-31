import {Component, Input, OnInit} from '@angular/core';
import { routerTransition } from '../../router.animations';
import {Observable} from 'rxjs';
import {ApproverService} from '../../shared/services/approver/approver.service';
import {Approver} from '../../shared/models/approver';

@Component({
    selector: 'app-approver',
    templateUrl: './approver.component.html',
    styleUrls: ['./approver.component.scss'],
    animations: [routerTransition()]
})
export class ApproverComponent implements OnInit {

    id: number;
    approvers: Observable<Approver[]>;
    @Input() approver: Approver;

    constructor(private approverService: ApproverService) { }

    ngOnInit() {
        this.reloadData();
    }

    deleteApprover(id) {
        this.approverService.deleteApprover(id)
            .subscribe(
                data => {
                    console.log(data);
                    this.approvers = this.approverService.getApproverList();
                },
                error => console.log(error));
    }

    deleteApprovers() {
        this.approverService.deleteAll()
            .subscribe(
                data => {
                    console.log(data);
                    this.reloadData();
                },
                error => console.log('ERROR: ' + error));
    }

    reloadData() {
        this.approvers = this.approverService.getApproverList();
    }
}
