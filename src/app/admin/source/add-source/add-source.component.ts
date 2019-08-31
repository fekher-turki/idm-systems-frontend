import {Component, Input, OnInit} from '@angular/core';
import {Source} from '../../../shared/models/source';
import {SourceService} from '../../../shared/services/source/source.service';
import {Observable} from 'rxjs';
import {SourceType} from '../../../shared/models/sourceType';
import {SourceTypeService} from '../../../shared/services/sourceType/source-type.service';
import {Company} from '../../../shared/models/company';
import {CompanyService} from '../../../shared/services/company/company.service';
import {Client} from '../../../shared/models/client';
import {ClientService} from '../../../shared/services/client/client.service';
import {Router} from '@angular/router';

@Component({
    selector: 'app-add-source',
    templateUrl: './add-source.component.html',
    styleUrls: ['./add-source.component.scss']
})
export class AddSourceComponent implements OnInit {

    source: Source = new Source();
    id: number;
    sourceTypes: Observable<SourceType[]>;
    companies: Observable<Company[]>;
    clients: Observable<Client[]>;
    @Input() sourceType: SourceType;
    @Input() company: Company;
    @Input() client: Client;
    submitted = false;

    // tslint:disable-next-line:max-line-length
    constructor(private router: Router, private sourceTypeService: SourceTypeService, private sourceService: SourceService, private companyService: CompanyService, private clientService: ClientService) { }

    ngOnInit() {
        this.reloadData();
    }
    newSource(): void {
        this.submitted = false;
        this.source = new Source();
    }
    save() {
        this.sourceService.createSource(this.source)
            .subscribe(
                data => {
                    console.log(data);
                    this.submitted = true;
                },
                error => alert('Check your data !'));
        this.source = new Source();
    }

    onSubmit() {
        this.save();
    }

    reloadData() {
        this.sourceTypes = this.sourceTypeService.getSourceTypeList();
        this.companies = this.companyService.getCompanyList();
        this.clients = this.clientService.getClientList();
    }
}
