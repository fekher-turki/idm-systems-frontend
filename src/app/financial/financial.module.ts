import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';

import { FinancialRoutingModule } from './financial-routing.module';
import { FinancialComponent } from './financial.component';
import { FinancialSidebarComponent } from './financial-components/financial-sidebar/financial-sidebar.component';
import { FinancialHeaderComponent } from './financial-components/financial-header/financial-header.component';

@NgModule({
    imports: [
        CommonModule,
        FinancialRoutingModule,
        TranslateModule,
        NgbDropdownModule
    ],
    declarations: [FinancialComponent, FinancialSidebarComponent, FinancialHeaderComponent]
})
export class FinancialModule {}
