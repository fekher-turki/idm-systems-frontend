import {Component, Input, OnInit} from '@angular/core';
import {RequesterTeam} from '../../../shared/models/requesterTeam';
import {RequesterTeamService} from '../../../shared/services/requesterTeam/requester-team.service';
import {Observable} from 'rxjs';
import {Requester} from '../../../shared/models/requester';
import {RequesterService} from '../../../shared/services/requester/requester.service';
import {Team} from '../../../shared/models/team';
import {TeamService} from '../../../shared/services/team/team.service';
import {Router} from '@angular/router';

@Component({
    selector: 'app-add-requester-team',
    templateUrl: './add-requester-team.component.html',
    styleUrls: ['./add-requester-team.component.scss']
})
export class AddRequesterTeamComponent implements OnInit {

    requesterTeam: RequesterTeam = new RequesterTeam();
    id: number;
    requesters: Observable<Requester[]>;
    teams: Observable<Team[]>;
    @Input() requester: Requester;
    @Input() team: Team;
    submitted = false;

    // tslint:disable-next-line:max-line-length
    constructor(private router: Router, private requesterTeamService: RequesterTeamService, private requesterService: RequesterService, private teamService: TeamService) { }

    ngOnInit() {
        this.reloadData();
    }
    newRequesterTeam(): void {
        this.submitted = false;
        this.requesterTeam = new RequesterTeam();
    }
    save() {
        this.requesterTeamService.createRequesterTeam(this.requesterTeam)
            .subscribe(
                data => {
                    console.log(data);
                    this.submitted = true;
                },
                error => alert('Already assigned !'));
        this.requesterTeam = new RequesterTeam();
    }

    onSubmit() {
        this.save();
    }

    reloadData() {
        this.requesters = this.requesterService.getRequesterList();
        this.teams = this.teamService.getTeamList();
    }
}
