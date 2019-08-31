import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {
    RoleGuardService as RoleGuard
} from './shared/guard/role-guard.service';
import {
    ApproverGuardService as ApproverGuard
} from './shared/guard/approver-guard.service';
import {AuthGuard} from './shared/guard';

const routes: Routes = [
    { path: '', loadChildren: './login/login.module#LoginModule'},
    { path: 'admin', loadChildren: './admin/admin.module#AdminModule', canActivate: [RoleGuard], data: {
            expectedRole: '1'
        }},
    { path: 'user', loadChildren: './user/user.module#UserModule', canActivate: [RoleGuard], data: {
            expectedRole: '3'
        }},
    { path: 'moderator', loadChildren: './moderator/moderator.module#ModeratorModule', canActivate: [ApproverGuard], data: {
            expectedApprover: '3true'
        }},
    { path: 'financial', loadChildren: './financial/financial.module#FinancialModule', canActivate: [RoleGuard], data: {
            expectedRole: '2'
        }},
    { path: 'login', loadChildren: './login/login.module#LoginModule'},
    { path: 'error', loadChildren: './server-error/server-error.module#ServerErrorModule', canActivate: [AuthGuard] },
    { path: 'access-denied', loadChildren: './access-denied/access-denied.module#AccessDeniedModule', canActivate: [AuthGuard] },
    { path: 'not-found', loadChildren: './not-found/not-found.module#NotFoundModule', canActivate: [AuthGuard] },
    { path: '**', redirectTo: 'not-found' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
