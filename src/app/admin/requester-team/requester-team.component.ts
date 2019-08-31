import {Component, Input, OnInit} from '@angular/core';
import { routerTransition } from '../../router.animations';
import {Observable} from 'rxjs';
import {RequesterTeamService} from '../../shared/services/requesterTeam/requester-team.service';
import {RequesterTeam} from '../../shared/models/requesterTeam';

@Component({
    selector: 'app-requester-team',
    templateUrl: './requester-team.component.html',
    styleUrls: ['./requester-team.component.scss'],
    animations: [routerTransition()]
})
export class RequesterTeamComponent implements OnInit {

    id: number;
    requesterTeams: Observable<RequesterTeam[]>;
    @Input() requesterTeam: RequesterTeam;

    constructor(private requesterTeamService: RequesterTeamService) { }

    ngOnInit() {
        this.reloadData();
    }

    deleteRequesterTeam(id) {
        this.requesterTeamService.deleteRequesterTeam(id)
            .subscribe(
                data => {
                    console.log(data);
                    this.requesterTeams = this.requesterTeamService.getRequesterTeamList();
                },
                error => console.log(error));
    }

    deleteRequesterTeams() {
        this.requesterTeamService.deleteAll()
            .subscribe(
                data => {
                    console.log(data);
                    this.reloadData();
                },
                error => console.log('ERROR: ' + error));
    }

    reloadData() {
        this.requesterTeams = this.requesterTeamService.getRequesterTeamList();
    }
}
