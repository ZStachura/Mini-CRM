import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'',
    redirectTo:'/homepage',
    pathMatch:'full'
  },
  {
    path:'homepage',
    loadChildren:()=>import('./homepage/homepage.module').then(m=>m.HomepageModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }