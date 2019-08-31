import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {CurrencyComponent} from './currency.component';
import { AddCurrencyComponent } from './add-currency/add-currency.component';
import { UpdateCurrencyComponent } from './update-currency/update-currency.component';
import { CurrencyRoutingModule } from './currency-routing.module';
import { PageHeaderModule } from './../../shared';
import {FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
    declarations: [CurrencyComponent, AddCurrencyComponent, UpdateCurrencyComponent],
    imports: [
        CommonModule,
        CurrencyRoutingModule,
        PageHeaderModule,
        FormsModule,
        ReactiveFormsModule
    ]
})
export class CurrencyModule { }
