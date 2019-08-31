import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, NgForm, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {RuleService} from '../../../shared/services/rule/rule.service';

@Component({
    selector: 'app-update-rule',
    templateUrl: './update-rule.component.html',
    styleUrls: ['./update-rule.component.scss']
})
export class UpdateRuleComponent implements OnInit {
    ruleForm: FormGroup;
    _id: number = null;
    submitted = false;
    alertmsg: string;
    alertcolor: string;

    // tslint:disable-next-line:max-line-length
    constructor(private ruleService: RuleService, private router: Router, private route: ActivatedRoute, private formBuilder: FormBuilder) { }

    ngOnInit() {
        this.getProduct(this.route.snapshot.params['id']);
        this.ruleForm = this.formBuilder.group({
            'id' : [null, Validators.required],
            'description' : [null, Validators.required],
            'value' : [null, Validators.required],
        });
    }

    getProduct(id) {
        this.ruleService.getRuleById(id)
            .subscribe(data => {
                this._id = data[0].id;
                this.ruleForm.setValue({
                    id: data[0].id,
                    description: data[0].description,
                    value: data[0].value,
                });
            });
    }

    onSubmit(form: NgForm) {
        this.ruleService.updateRule(this._id, form)
            .subscribe(
                data => {
                    console.log(data);
                    this.submitted = true;
                    this.alertmsg = 'Rule updated!';
                    this.alertcolor = 'alert-success';
                },
                error => console.log(error));
        this.alertmsg = 'Error occurred!';
        this.alertcolor = 'alert-warning';
    }

    closeAlert() {
        this.submitted = false;
    }
}
