import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomepageComponent } from './homepage.component';

const routes: Routes = [
  { 
    path: '', 
    component: HomepageComponent,
   },
  {
    path:'about',
    component:AboutComponent,
  },
  {
    path:'contact',
    component:ContactComponent,
  },
  { path: 'authentication', loadChildren: () => import('../authentication/authentication.module').then(m => m.AuthenticationModule) }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomepageRoutingModule { }
