import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';

import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { UserSidebarComponent } from './user-components/user-sidebar/user-sidebar.component';
import { UserHeaderComponent } from './user-components/user-header/user-header.component';

@NgModule({
    imports: [
        CommonModule,
        UserRoutingModule,
        TranslateModule,
        NgbDropdownModule
    ],
    declarations: [UserComponent, UserSidebarComponent, UserHeaderComponent]
})
export class UserModule {}
