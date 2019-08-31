import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, NgForm, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {CategoryService} from '../../../shared/services/category/category.service';

@Component({
    selector: 'app-update-category',
    templateUrl: './update-category.component.html',
    styleUrls: ['./update-category.component.scss']
})
export class UpdateCategoryComponent implements OnInit {
    categoryForm: FormGroup;
    _id: number = null;
    submitted = false;
    alertmsg: string;
    alertcolor: string;

    // tslint:disable-next-line:max-line-length
    constructor(private categoryService: CategoryService, private router: Router, private route: ActivatedRoute, private formBuilder: FormBuilder) { }

    ngOnInit() {
        this.getProduct(this.route.snapshot.params['id']);
        this.categoryForm = this.formBuilder.group({
            'id' : [null, Validators.required],
            'accounting_code' : [null, Validators.required],
            'name' : [null, Validators.required],
            'description' : [null, Validators.required],
        });
    }

    getProduct(id) {
        this.categoryService.getCategoryById(id)
            .subscribe(data => {
                this._id = data[0].id;
                this.categoryForm.setValue({
                    id: data[0].id,
                    accounting_code: data[0].accounting_code,
                    name: data[0].name,
                    description: data[0].description,
                });
            });
    }

    onSubmit(form: NgForm) {
        this.categoryService.updateCategory(this._id, form)
            .subscribe(
                data => {
                    console.log(data);
                    this.submitted = true;
                    this.alertmsg = 'Category updated!';
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
