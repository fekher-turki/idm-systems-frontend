import {Component, Input, OnInit} from '@angular/core';
import { routerTransition } from '../../router.animations';
import {Observable} from 'rxjs';
import {SourceService} from '../../shared/services/source/source.service';
import {Source} from '../../shared/models/source';

@Component({
    selector: 'app-source',
    templateUrl: './source.component.html',
    styleUrls: ['./source.component.scss'],
    animations: [routerTransition()]
})
export class SourceComponent implements OnInit {

    id: number;
    sources: Observable<Source[]>;
    @Input() source: Source;

    constructor(private sourceService: SourceService) { }

    ngOnInit() {
        this.reloadData();
    }

    deleteSource(id) {
        this.sourceService.deleteSource(id)
            .subscribe(
                data => {
                    console.log(data);
                    this.sources = this.sourceService.getSourceList();
                },
                error => console.log(error));
    }

    deleteSources() {
        this.sourceService.deleteAll()
            .subscribe(
                data => {
                    console.log(data);
                    this.reloadData();
                },
                error => console.log('ERROR: ' + error));
    }

    reloadData() {
        this.sources = this.sourceService.getSourceList();
    }
}
