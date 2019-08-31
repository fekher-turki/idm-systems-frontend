import {Component, Input, OnInit} from '@angular/core';
import { routerTransition } from '../../router.animations';
import {Observable} from 'rxjs';
import {SourceTeamService} from '../../shared/services/sourceTeam/source-team.service';
import {SourceTeam} from '../../shared/models/sourceTeam';
import {Source} from '../../shared/models/source';
import {SourceService} from '../../shared/services/source/source.service';
import {Team} from '../../shared/models/team';
import {TeamService} from '../../shared/services/team/team.service';

@Component({
    selector: 'app-source-team',
    templateUrl: './source-team.component.html',
    styleUrls: ['./source-team.component.scss'],
    animations: [routerTransition()]
})
export class SourceTeamComponent implements OnInit {

    id: number;
    sourceTeams: Observable<SourceTeam[]>;
    sources: Observable<Source[]>;
    teams: Observable<Team[]>;
    @Input() sourceTeam: SourceTeam;
    @Input() source: Source;
    @Input() team: Team;

    // tslint:disable-next-line:max-line-length
    constructor(private sourceTeamService: SourceTeamService, private sourceService: SourceService, private teamService: TeamService) { }

    ngOnInit() {
        this.reloadData();
    }

    deleteSourceTeam(id) {
        this.sourceTeamService.deleteSourceTeam(id)
            .subscribe(
                data => {
                    console.log(data);
                    this.sourceTeams = this.sourceTeamService.getSourceTeamList();
                },
                error => console.log(error));
    }

    deleteSourceTeams() {
        this.sourceTeamService.deleteAll()
            .subscribe(
                data => {
                    console.log(data);
                    this.reloadData();
                },
                error => console.log('ERROR: ' + error));
    }

    reloadData() {
        this.sourceTeams = this.sourceTeamService.getSourceTeamList();
        this.sources = this.sourceService.getSourceList();
        this.teams = this.teamService.getTeamList();

    }
}
