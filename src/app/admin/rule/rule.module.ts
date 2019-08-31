import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {RuleComponent} from './rule.component';
import { AddRuleComponent } from './add-rule/add-rule.component';
import { UpdateRuleComponent } from './update-rule/update-rule.component';
import { RuleRoutingModule } from './rule-routing.module';
import { PageHeaderModule } from './../../shared';
import {FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
    declarations: [RuleComponent, AddRuleComponent, UpdateRuleComponent],
    imports: [
        CommonModule,
        RuleRoutingModule,
        PageHeaderModule,
        FormsModule,
        ReactiveFormsModule
    ]
})
export class RuleModule { }
