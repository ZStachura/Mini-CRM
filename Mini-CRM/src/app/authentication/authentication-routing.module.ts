import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticationComponent } from './authentication.component';
import { CanActivateGuard } from './guard/CanActivateGuard';

const routes: Routes = [{ path: '', component: AuthenticationComponent },
 { path: 'dashboard', 
 loadChildren: () => import('../dashboard/dashboard.module').then(m => m.DashboardModule),
 canActivate:[CanActivateGuard]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthenticationRoutingModule { }
