import {Component, Input, OnInit} from '@angular/core';
import { routerTransition } from '../../router.animations';
import {Observable} from 'rxjs';
import {ApproverTeamService} from '../../shared/services/approverTeam/approver-team.service';
import {ApproverTeam} from '../../shared/models/approverTeam';

@Component({
    selector: 'app-approver-team',
    templateUrl: './approver-team.component.html',
    styleUrls: ['./approver-team.component.scss'],
    animations: [routerTransition()]
})
export class ApproverTeamComponent implements OnInit {

    id: number;
    approverTeams: Observable<ApproverTeam[]>;
    @Input() approverTeam: ApproverTeam;

    constructor(private approverTeamService: ApproverTeamService) { }

    ngOnInit() {
        this.reloadData();
    }

    deleteApproverTeam(id) {
        this.approverTeamService.deleteApproverTeam(id)
            .subscribe(
                data => {
                    console.log(data);
                    this.approverTeams = this.approverTeamService.getApproverTeamList();
                },
                error => console.log(error));
    }

    deleteApproverTeams() {
        this.approverTeamService.deleteAll()
            .subscribe(
                data => {
                    console.log(data);
                    this.reloadData();
                },
                error => console.log('ERROR: ' + error));
    }

    reloadData() {
        this.approverTeams = this.approverTeamService.getApproverTeamList();
    }
}
