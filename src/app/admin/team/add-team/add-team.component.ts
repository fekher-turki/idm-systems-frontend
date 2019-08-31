import { Component, OnInit } from '@angular/core';
import {Team} from '../../../shared/models/team';
import {TeamService} from '../../../shared/services/team/team.service';

@Component({
    selector: 'app-add-team',
    templateUrl: './add-team.component.html',
    styleUrls: ['./add-team.component.scss']
})
export class AddTeamComponent implements OnInit {

    team: Team = new Team();
    submitted = false;

    constructor(private teamService: TeamService) { }

    ngOnInit() {
    }
    newTeam(): void {
        this.submitted = false;
        this.team = new Team();
    }
    save() {
        this.teamService.createTeam(this.team)
            .subscribe(
                data => {
                    console.log(data);
                    this.submitted = true;
                },
                error => alert('Already assigned !'));
        this.team = new Team();
    }

    onSubmit() {
        this.save();
    }
}
