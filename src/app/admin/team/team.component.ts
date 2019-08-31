import {Component, Input, OnInit} from '@angular/core';
import { routerTransition } from '../../router.animations';
import {Observable} from 'rxjs';
import {TeamService} from '../../shared/services/team/team.service';
import {Team} from '../../shared/models/team';

@Component({
    selector: 'app-team',
    templateUrl: './team.component.html',
    styleUrls: ['./team.component.scss'],
    animations: [routerTransition()]
})
export class TeamComponent implements OnInit {

    id: number;
    teams: Observable<Team[]>;
    @Input() team: Team;

    constructor(private teamService: TeamService) { }

    ngOnInit() {
        this.reloadData();
    }

    deleteTeam(id) {
        this.teamService.deleteTeam(id)
            .subscribe(
                data => {
                    console.log(data);
                    this.teams = this.teamService.getTeamList();
                },
                error => console.log(error));
    }

    deleteTeams() {
        this.teamService.deleteAll()
            .subscribe(
                data => {
                    console.log(data);
                    this.reloadData();
                },
                error => console.log('ERROR: ' + error));
    }

    reloadData() {
        this.teams = this.teamService.getTeamList();
    }
}
