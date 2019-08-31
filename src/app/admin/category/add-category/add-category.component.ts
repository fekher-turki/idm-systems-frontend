import { Component, OnInit } from '@angular/core';
import {Category} from '../../../shared/models/category';
import {CategoryService} from '../../../shared/services/category/category.service';

@Component({
    selector: 'app-add-category',
    templateUrl: './add-category.component.html',
    styleUrls: ['./add-category.component.scss']
})
export class AddCategoryComponent implements OnInit {

    category: Category = new Category();
    submitted = false;

    constructor(private categoryService: CategoryService) { }

    ngOnInit() {
    }
    newCategory(): void {
        this.submitted = false;
        this.category = new Category();
    }
    save() {
        console.log(this.category);
        this.categoryService.createCategory(this.category)
            .subscribe(
                data => {
                    console.log(data);
                    this.submitted = true;
                },
                error => console.log(error));
        this.category = new Category();
    }

    onSubmit() {
        this.save();
    }
}
