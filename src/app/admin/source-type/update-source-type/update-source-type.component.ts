import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, NgForm, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {SourceTypeService} from '../../../shared/services/sourceType/source-type.service';

@Component({
    selector: 'app-update-source-type',
    templateUrl: './update-source-type.component.html',
    styleUrls: ['./update-source-type.component.scss']
})
export class UpdateSourceTypeComponent implements OnInit {
    sourceTypeForm: FormGroup;
    _id: number = null;
    submitted = false;
    alertmsg: string;
    alertcolor: string;

    // tslint:disable-next-line:max-line-length
    constructor(private sourceTypeService: SourceTypeService, private router: Router, private route: ActivatedRoute, private formBuilder: FormBuilder) { }

    ngOnInit() {
        this.getProduct(this.route.snapshot.params['id']);
        this.sourceTypeForm = this.formBuilder.group({
            'id' : [null, Validators.required],
            'code' : [null, Validators.required],
            'name' : [null, Validators.required],
            'description' : [null, Validators.required],
        });
    }

    getProduct(id) {
        this.sourceTypeService.getSourceTypeById(id)
            .subscribe(data => {
                this._id = data[0].id;
                this.sourceTypeForm.setValue({
                    id: data[0].id,
                    code: data[0].code,
                    name: data[0].name,
                    description: data[0].description,
                });
            });
    }

    onSubmit(form: NgForm) {
        this.sourceTypeService.updateSourceType(this._id, form)
            .subscribe(
                data => {
                    console.log(data);
                    this.submitted = true;
                    this.alertmsg = 'Source type updated!';
                    this.alertcolor = 'alert-success';
                },
                error => alert('Check your data !'));
        this.alertmsg = 'Error occurred!';
        this.alertcolor = 'alert-warning';
    }

    closeAlert() {
        this.submitted = false;
    }
}
