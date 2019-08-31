import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, NgForm, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {TeamService} from '../../../shared/services/team/team.service';

@Component({
    selector: 'app-update-team',
    templateUrl: './update-team.component.html',
    styleUrls: ['./update-team.component.scss']
})
export class UpdateTeamComponent implements OnInit {
    teamForm: FormGroup;
    _id: number = null;
    submitted = false;
    alertmsg: string;
    alertcolor: string;

    // tslint:disable-next-line:max-line-length
    constructor(private teamService: TeamService, private router: Router, private route: ActivatedRoute, private formBuilder: FormBuilder) { }

    ngOnInit() {
        this.getProduct(this.route.snapshot.params['id']);
        this.teamForm = this.formBuilder.group({
            'id' : [null, Validators.required],
            'code' : [null, Validators.required],
            'name' : [null, Validators.required],
        });
    }

    getProduct(id) {
        this.teamService.getTeamById(id)
            .subscribe(data => {
                this._id = data[0].id;
                this.teamForm.setValue({
                    id: data[0].id,
                    code: data[0].code,
                    name: data[0].name,
                });
            });
    }

    onSubmit(form: NgForm) {
        this.teamService.updateTeam(this._id, form)
            .subscribe(
                data => {
                    console.log(data);
                    this.submitted = true;
                    this.alertmsg = 'Team updated!';
                    this.alertcolor = 'alert-success';
                },
                error => alert('Check your data !'));
        this.alertmsg = 'Error occurred!';
        this.alertcolor = 'alert-warning';
    }

    closeAlert() {
        this.submitted = false;
    }
}
