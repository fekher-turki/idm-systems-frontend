import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, NgForm, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {SourceService} from '../../../shared/services/source/source.service';
import {Observable} from 'rxjs';
import {SourceType} from '../../../shared/models/sourceType';
import {SourceTypeService} from '../../../shared/services/sourceType/source-type.service';
import {Company} from '../../../shared/models/company';
import {CompanyService} from '../../../shared/services/company/company.service';
import {Client} from '../../../shared/models/client';
import {ClientService} from '../../../shared/services/client/client.service';

@Component({
    selector: 'app-update-source',
    templateUrl: './update-source.component.html',
    styleUrls: ['./update-source.component.scss']
})
export class UpdateSourceComponent implements OnInit {
    sourceForm: FormGroup;
    sourceTypes: Observable<SourceType[]>;
    companies: Observable<Company[]>;
    clients: Observable<Client[]>;
    @Input() sourceType: SourceType;
    @Input() company: Company;
    @Input() client: Client;
    _id: number = null;
    submitted = false;
    alertmsg: string;
    alertcolor: string;

    // tslint:disable-next-line:max-line-length
    constructor(private sourceTypeService: SourceTypeService, private companyService: CompanyService, private clientService: ClientService, private sourceService: SourceService, private router: Router, private route: ActivatedRoute, private formBuilder: FormBuilder) { }

    ngOnInit() {
        this.getSource(this.route.snapshot.params['id']);
        this.sourceForm = this.formBuilder.group({
            'id' : [null, Validators.required],
            'code' : [null, Validators.required],
            'description' : [null, Validators.required],
            'sourceType' : [null, Validators.required],
            'company' : [null, Validators.required],
            'client' : [null, Validators.required],
            'date_start' : [null, Validators.required],
            'date_end' : [null, Validators.required],
            'status' : [null, Validators.required]
        });
        this.reloadData();
    }

    getSource(id) {
        this.sourceService.getSourceById(id)
            .subscribe(data => {
                this._id = data[0].id;
                this.sourceForm.setValue({
                    id: data[0].id,
                    code: data[0].code,
                    description: data[0].description,
                    sourceType: data[0].sourceType,
                    company: data[0].company,
                    client: data[0].client,
                    date_start: data[0].date_start,
                    date_end: data[0].date_end,
                    status: data[0].status
                });
            });
    }

    onSubmit(form: NgForm) {
        this.sourceService.updateSource(this._id, form)
            .subscribe(
                data => {
                    console.log(data);
                    this.submitted = true;
                    this.alertmsg = 'Source updated!';
                    this.alertcolor = 'alert-success';
                },
                error => alert('Check your data !'));
        this.alertmsg = 'Error occurred!';
        this.alertcolor = 'alert-warning';
    }

    closeAlert() {
        this.submitted = false;
    }

    reloadData() {
        this.sourceTypes = this.sourceTypeService.getSourceTypeList();
        this.companies = this.companyService.getCompanyList();
        this.clients = this.clientService.getClientList();
    }

    compareFn(c1: any, c2: any): boolean {
        return c1 && c2 ? c1.id === c2.id : c1 === c2;
    }
}
