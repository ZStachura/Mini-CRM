import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientsComponent } from './clients/clients.component';
import { DashboardComponent } from './dashboard.component';
import { EditUserComponent } from './features/edit-user/edit-user.component';
import { UserInfoComponent } from './user-info/user-info.component';

const routes: Routes = [{ path: '', component: DashboardComponent },
{
  path:'user',component:UserInfoComponent
},
{
  path:'clients',component:ClientsComponent
}
]
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
