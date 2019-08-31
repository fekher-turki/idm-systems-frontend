import {Component, Input, OnInit} from '@angular/core';
import { routerTransition } from '../../router.animations';
import {Observable} from 'rxjs';
import {SourceType} from '../../shared/models/sourceType';
import {SourceTypeService} from '../../shared/services/sourceType/source-type.service';

@Component({
    selector: 'app-source-type',
    templateUrl: './source-type.component.html',
    styleUrls: ['./source-type.component.scss'],
    animations: [routerTransition()]
})
export class SourceTypeComponent implements OnInit {

    id: number;
    sourceTypes: Observable<SourceType[]>;
    @Input() sourceType: SourceType;

    constructor(private sourceTypeService: SourceTypeService) { }

    ngOnInit() {
        this.reloadData();
    }

    deleteSourceType(id) {
        this.sourceTypeService.deleteSourceType(id)
            .subscribe(
                data => {
                    console.log(data);
                    this.sourceTypes = this.sourceTypeService.getSourceTypeList();
                },
                error => console.log(error));
    }

    deleteSourceTypes() {
        this.sourceTypeService.deleteAll()
            .subscribe(
                data => {
                    console.log(data);
                    this.reloadData();
                },
                error => console.log('ERROR: ' + error));
    }

    reloadData() {
        this.sourceTypes = this.sourceTypeService.getSourceTypeList();
    }
}
