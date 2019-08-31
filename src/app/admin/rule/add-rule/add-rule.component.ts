import { Component, OnInit } from '@angular/core';
import {RuleService} from '../../../shared/services/rule/rule.service';
import {Rule} from '../../../shared/models/rule';

@Component({
    selector: 'app-add-rule',
    templateUrl: './add-rule.component.html',
    styleUrls: ['./add-rule.component.scss']
})
export class AddRuleComponent implements OnInit {

    rule: Rule = new Rule();
    submitted = false;

    constructor(private ruleService: RuleService) { }

    ngOnInit() {
    }
    newRule(): void {
        this.submitted = false;
        this.rule = new Rule();
    }
    save() {
        this.ruleService.createRule(this.rule)
            .subscribe(
                data => {
                    console.log(data);
                    this.submitted = true;
                },
                error => console.log(error));
        this.rule = new Rule();
    }

    onSubmit() {
        this.save();
    }
}
