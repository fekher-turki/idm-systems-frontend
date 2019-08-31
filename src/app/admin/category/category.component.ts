import {Component, Input, OnInit} from '@angular/core';
import { routerTransition } from '../../router.animations';
import {Observable} from 'rxjs';
import {CategoryService} from '../../shared/services/category/category.service';
import {Category} from '../../shared/models/category';

@Component({
    selector: 'app-category',
    templateUrl: './category.component.html',
    styleUrls: ['./category.component.scss'],
    animations: [routerTransition()]
})
export class CategoryComponent implements OnInit {

    id: number;
    categories: Observable<Category[]>;
    @Input() category: Category;

    constructor(private categoryService: CategoryService) { }

    ngOnInit() {
        this.reloadData();
    }

    deleteCategory(id) {
        this.categoryService.deleteCategory(id)
            .subscribe(
                data => {
                    console.log(data);
                    this.categories = this.categoryService.getCategoryList();
                },
                error => console.log(error));
    }

    deleteCategories() {
        this.categoryService.deleteAll()
            .subscribe(
                data => {
                    console.log(data);
                    this.reloadData();
                },
                error => console.log('ERROR: ' + error));
    }

    reloadData() {
        this.categories = this.categoryService.getCategoryList();
    }
}
