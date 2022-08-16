import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomepageRoutingModule } from './homepage-routing.module';
import { HomepageComponent } from './homepage.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon'
import { HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    HomepageComponent,
  ],
  imports: [
    CommonModule,
    HomepageRoutingModule,
    MatButtonModule,
    MatIconModule,
    HttpClientModule
  ],
  exports:[]
})
export class HomepageModule { }
