import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-financial',
    templateUrl: './financial.component.html',
    styleUrls: ['./financial.component.scss']
})
export class FinancialComponent implements OnInit {

    collapedSideBar: boolean;

    constructor() {}

    ngOnInit() {}

    receiveCollapsed($event) {
        this.collapedSideBar = $event;
    }
}
