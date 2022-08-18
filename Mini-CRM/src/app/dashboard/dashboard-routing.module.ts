import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { UserInfoComponent } from './user-info/user-info.component';

const routes: Routes = [{ path: '', component: DashboardComponent },
{
  path:'user',component:UserInfoComponent
},
]
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
