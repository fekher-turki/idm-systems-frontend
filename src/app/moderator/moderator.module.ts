import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';

import { ModeratorRoutingModule } from './moderator-routing.module';
import { ModeratorComponent } from './moderator.component';
import { ModeratorSidebarComponent } from './moderator-components/moderator-sidebar/moderator-sidebar.component';
import { ModeratorHeaderComponent } from './moderator-components/moderator-header/moderator-header.component';

@NgModule({
    imports: [
        CommonModule,
        ModeratorRoutingModule,
        TranslateModule,
        NgbDropdownModule
    ],
    declarations: [ModeratorComponent, ModeratorSidebarComponent, ModeratorHeaderComponent]
})
export class ModeratorModule {}
