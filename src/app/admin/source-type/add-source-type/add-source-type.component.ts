import { Component, OnInit } from '@angular/core';
import {SourceTypeService} from '../../../shared/services/sourceType/source-type.service';
import {SourceType} from '../../../shared/models/sourceType';

@Component({
    selector: 'app-add-source-type',
    templateUrl: './add-source-type.component.html',
    styleUrls: ['./add-source-type.component.scss']
})
export class AddSourceTypeComponent implements OnInit {

    sourceType: SourceType = new SourceType();
    submitted = false;

    constructor(private sourceTypeService: SourceTypeService) { }

    ngOnInit() {
    }
    newSourceType(): void {
        this.submitted = false;
        this.sourceType = new SourceType();
    }
    save() {
        this.sourceTypeService.createSourceType(this.sourceType)
            .subscribe(
                data => {
                    console.log(data);
                    this.submitted = true;
                },
                error => alert('Check your data !'));
        this.sourceType = new SourceType();
    }

    onSubmit() {
        this.save();
    }
}
