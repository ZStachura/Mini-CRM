import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomepageRoutingModule } from './homepage-routing.module';
import { HomepageComponent } from './homepage.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon'
import { HttpClientModule} from '@angular/common/http';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
@NgModule({
  declarations: [
    HomepageComponent,
    NavigationBarComponent
  ],
  imports: [
    CommonModule,
    HomepageRoutingModule,
    MatButtonModule,
    MatIconModule,
    HttpClientModule
  ],
  exports:[NavigationBarComponent],
  schemas:[NO_ERRORS_SCHEMA]
})
export class HomepageModule { }
