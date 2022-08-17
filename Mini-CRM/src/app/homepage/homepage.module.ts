import { NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomepageRoutingModule } from './homepage-routing.module';
import { HomepageComponent } from './homepage.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon'
import { HttpClientModule} from '@angular/common/http';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
@NgModule({
  declarations: [
    HomepageComponent,
    NavigationBarComponent,
    ContactComponent,
    AboutComponent
  ],
  imports: [
    CommonModule,
    HomepageRoutingModule,
    MatButtonModule,
    MatIconModule,
    HttpClientModule
  ],
  exports:[NavigationBarComponent],
  schemas:[]
})
export class HomepageModule { }
