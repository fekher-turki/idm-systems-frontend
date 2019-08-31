import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, NgForm, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {SourceTeamService} from '../../../shared/services/sourceTeam/source-team.service';
import {Observable} from 'rxjs';
import {Source} from '../../../shared/models/source';
import {SourceService} from '../../../shared/services/source/source.service';
import {Team} from '../../../shared/models/team';
import {TeamService} from '../../../shared/services/team/team.service';

@Component({
    selector: 'app-update-source-team',
    templateUrl: './update-source-team.component.html',
    styleUrls: ['./update-source-team.component.scss']
})
export class UpdateSourceTeamComponent implements OnInit {
    sourceTeamForm: FormGroup;
    sources: Observable<Source[]>;
    teams: Observable<Team[]>;
    @Input() source: Source;
    @Input() team: Team;
    _id: number = null;
    submitted = false;
    alertmsg: string;
    alertcolor: string;

    // tslint:disable-next-line:max-line-length
    constructor(private sourceService: SourceService, private teamService: TeamService, private sourceTeamService: SourceTeamService, private router: Router, private route: ActivatedRoute, private formBuilder: FormBuilder) { }

    ngOnInit() {
        this.getSourceTeam(this.route.snapshot.params['id']);
        this.sourceTeamForm = this.formBuilder.group({
            'id' : [null, Validators.required],
            'source' : [null, Validators.required],
            'team' : [null, Validators.required]
        });
        this.reloadData();
    }

    getSourceTeam(id) {
        this.sourceTeamService.getSourceTeamById(id)
            .subscribe(data => {
                this._id = data[0].id;
                this.sourceTeamForm.setValue({
                    id: data[0].id,
                    source: data[0].source,
                    team: data[0].team,
                });
            });
    }

    onSubmit(form: NgForm) {
        this.sourceTeamService.updateSourceTeam(this._id, form)
            .subscribe(
                data => {
                    console.log(data);
                    this.submitted = true;
                    this.alertmsg = 'SourceTeam updated!';
                    this.alertcolor = 'alert-success';
                },
                error => alert('Already assigned !'));
        this.alertmsg = 'Error occurred!';
        this.alertcolor = 'alert-warning';
    }

    closeAlert() {
        this.submitted = false;
    }

    reloadData() {
        this.sources = this.sourceService.getSourceList();
        this.teams = this.teamService.getTeamList();
    }

    compareFn(c1: any, c2: any): boolean {
        return c1 && c2 ? c1.id === c2.id : c1 === c2;
    }
}
