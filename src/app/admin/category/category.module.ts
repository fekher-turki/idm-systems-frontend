import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {CategoryComponent} from './category.component';
import { AddCategoryComponent } from './add-category/add-category.component';
import { UpdateCategoryComponent } from './update-category/update-category.component';
import { CategoryRoutingModule } from './category-routing.module';
import { PageHeaderModule } from './../../shared';
import {FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
    declarations: [CategoryComponent, AddCategoryComponent, UpdateCategoryComponent],
    imports: [
        CommonModule,
        CategoryRoutingModule,
        PageHeaderModule,
        FormsModule,
        ReactiveFormsModule
    ]
})
export class CategoryModule { }
