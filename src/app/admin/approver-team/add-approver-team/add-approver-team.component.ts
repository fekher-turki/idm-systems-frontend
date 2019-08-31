import {Component, Input, OnInit} from '@angular/core';
import {ApproverTeam} from '../../../shared/models/approverTeam';
import {ApproverTeamService} from '../../../shared/services/approverTeam/approver-team.service';
import {Observable} from 'rxjs';
import {Approver} from '../../../shared/models/approver';
import {ApproverService} from '../../../shared/services/approver/approver.service';
import {Team} from '../../../shared/models/team';
import {TeamService} from '../../../shared/services/team/team.service';
import {Router} from '@angular/router';

@Component({
    selector: 'app-add-approver-team',
    templateUrl: './add-approver-team.component.html',
    styleUrls: ['./add-approver-team.component.scss']
})
export class AddApproverTeamComponent implements OnInit {

    approverTeam: ApproverTeam = new ApproverTeam();
    id: number;
    approvers: Observable<Approver[]>;
    teams: Observable<Team[]>;
    @Input() approver: Approver;
    @Input() team: Team;
    submitted = false;

    // tslint:disable-next-line:max-line-length
    constructor(private router: Router, private approverTeamService: ApproverTeamService, private approverService: ApproverService, private teamService: TeamService) { }

    ngOnInit() {
        this.reloadData();
    }
    newApproverTeam(): void {
        this.submitted = false;
        this.approverTeam = new ApproverTeam();
    }
    save() {
        this.approverTeamService.createApproverTeam(this.approverTeam)
            .subscribe(
                data => {
                    console.log(data);
                    this.submitted = true;
                },
                error => alert('Already assigned !'));
        this.approverTeam = new ApproverTeam();
    }

    onSubmit() {
        this.save();
    }


    reloadData() {
        this.teams = this.teamService.getTeamList();
        this.approvers = this.approverService.getApproverList();
    }
}
