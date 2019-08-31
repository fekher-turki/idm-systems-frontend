import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, NgForm, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {ClientTypeService} from '../../../shared/services/clientType/client-type.service';

@Component({
    selector: 'app-update-client-type',
    templateUrl: './update-client-type.component.html',
    styleUrls: ['./update-client-type.component.scss']
})
export class UpdateClientTypeComponent implements OnInit {
    clientTypeForm: FormGroup;
    _id: number = null;
    submitted = false;
    alertmsg: string;
    alertcolor: string;

    // tslint:disable-next-line:max-line-length
    constructor(private clientTypeService: ClientTypeService, private router: Router, private route: ActivatedRoute, private formBuilder: FormBuilder) { }

    ngOnInit() {
        this.getProduct(this.route.snapshot.params['id']);
        this.clientTypeForm = this.formBuilder.group({
            'id' : [null, Validators.required],
            'code' : [null, Validators.required],
            'name' : [null, Validators.required],
            'description' : [null, Validators.required],
        });
    }

    getProduct(id) {
        this.clientTypeService.getClientTypeById(id)
            .subscribe(data => {
                this._id = data[0].id;
                this.clientTypeForm.setValue({
                    id: data[0].id,
                    code: data[0].code,
                    name: data[0].name,
                    description: data[0].description,
                });
            });
    }

    onSubmit(form: NgForm) {
        this.clientTypeService.updateClientType(this._id, form)
            .subscribe(
                data => {
                    console.log(data);
                    this.submitted = true;
                    this.alertmsg = 'ClientType updated!';
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
