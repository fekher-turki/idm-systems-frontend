import {Component, Input, OnInit} from '@angular/core';
import { routerTransition } from '../../router.animations';
import {Observable} from 'rxjs';
import {Rule} from '../../shared/models/rule';
import {RuleService} from '../../shared/services/rule/rule.service';

@Component({
    selector: 'app-rule',
    templateUrl: './rule.component.html',
    styleUrls: ['./rule.component.scss'],
    animations: [routerTransition()]
})
export class RuleComponent implements OnInit {

    id: number;
    rules: Observable<Rule[]>;
    @Input() rule: Rule;

    constructor(private ruleService: RuleService) { }

    ngOnInit() {
        this.reloadData();
    }

    deleteRule(id) {
        this.ruleService.deleteRule(id)
            .subscribe(
                data => {
                    console.log(data);
                    this.rules = this.ruleService.getRuleList();
                },
                error => console.log(error));
    }

    deleteRules() {
        this.ruleService.deleteAll()
            .subscribe(
                data => {
                    console.log(data);
                    this.reloadData();
                },
                error => console.log('ERROR: ' + error));
    }

    reloadData() {
        this.rules = this.ruleService.getRuleList();
    }
}
