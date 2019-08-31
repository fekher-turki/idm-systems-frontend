import {Component, Input, OnInit} from '@angular/core';
import {SourceTeam} from '../../../shared/models/sourceTeam';
import {SourceTeamService} from '../../../shared/services/sourceTeam/source-team.service';
import {Observable} from 'rxjs';
import {Source} from '../../../shared/models/source';
import {SourceService} from '../../../shared/services/source/source.service';
import {Team} from '../../../shared/models/team';
import {TeamService} from '../../../shared/services/team/team.service';
import {Router} from '@angular/router';

@Component({
    selector: 'app-add-source-team',
    templateUrl: './add-source-team.component.html',
    styleUrls: ['./add-source-team.component.scss']
})
export class AddSourceTeamComponent implements OnInit {

    sourceTeam: SourceTeam = new SourceTeam();
    id: number;
    sources: Observable<Source[]>;
    teams: Observable<Team[]>;
    @Input() source: Source;
    @Input() team: Team;
    submitted = false;

    // tslint:disable-next-line:max-line-length
    constructor(private router: Router, private sourceTeamService: SourceTeamService, private sourceService: SourceService, private teamService: TeamService) { }

    ngOnInit() {
        this.reloadData();
    }
    newSourceTeam(): void {
        this.submitted = false;
        this.sourceTeam = new SourceTeam();
    }
    save() {
        this.sourceTeamService.createSourceTeam(this.sourceTeam)
            .subscribe(
                data => {
                    console.log(data);
                    this.submitted = true;
                },
                error => alert('Already assigned !'));
        this.sourceTeam = new SourceTeam();
    }

    onSubmit() {
        this.save();
    }

    reloadData() {
        this.sources = this.sourceService.getSourceList();
        this.teams = this.teamService.getTeamList();
    }
}
