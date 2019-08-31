import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {RuleComponent} from './rule.component';
import {AddRuleComponent} from './add-rule/add-rule.component';
import {UpdateRuleComponent} from './update-rule/update-rule.component';

const routes: Routes = [
    {
        path: '', component: RuleComponent
    },
    {
        path: 'addRule', component: AddRuleComponent
    },
    {
        path: 'updateRule/:id', component: UpdateRuleComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class RuleRoutingModule { }
