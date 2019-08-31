import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, NgForm, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {RequesterTeamService} from '../../../shared/services/requesterTeam/requester-team.service';
import {Observable} from 'rxjs';
import {Requester} from '../../../shared/models/requester';
import {RequesterService} from '../../../shared/services/requester/requester.service';
import {Team} from '../../../shared/models/team';
import {TeamService} from '../../../shared/services/team/team.service';

@Component({
    selector: 'app-update-requester-team',
    templateUrl: './update-requester-team.component.html',
    styleUrls: ['./update-requester-team.component.scss']
})
export class UpdateRequesterTeamComponent implements OnInit {
    requesterTeamForm: FormGroup;
    requesters: Observable<Requester[]>;
    teams: Observable<Team[]>;
    @Input() requester: Requester;
    @Input() team: Team;
    _id: number = null;
    submitted = false;
    alertmsg: string;
    alertcolor: string;

    // tslint:disable-next-line:max-line-length
    constructor(private requesterService: RequesterService, private teamService: TeamService, private requesterTeamService: RequesterTeamService, private router: Router, private route: ActivatedRoute, private formBuilder: FormBuilder) { }

    ngOnInit() {
        this.getRequesterTeam(this.route.snapshot.params['id']);
        this.requesterTeamForm = this.formBuilder.group({
            'id' : [null, Validators.required],
            'requester' : [null, Validators.required],
            'team' : [null, Validators.required]
        });
        this.reloadData();
    }

    getRequesterTeam(id) {
        this.requesterTeamService.getRequesterTeamById(id)
            .subscribe(data => {
                this._id = data[0].id;
                this.requesterTeamForm.setValue({
                    id: data[0].id,
                    requester: data[0].requester,
                    team: data[0].team,
                });
            });
    }

    onSubmit(form: NgForm) {
        this.requesterTeamService.updateRequesterTeam(this._id, form)
            .subscribe(
                data => {
                    console.log(data);
                    this.submitted = true;
                    this.alertmsg = 'RequesterTeam updated!';
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
        this.requesters = this.requesterService.getRequesterList();
        this.teams = this.teamService.getTeamList();
    }

    compareFn(c1: any, c2: any): boolean {
        return c1 && c2 ? c1.id === c2.id : c1 === c2;
    }
}
