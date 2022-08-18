import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { UserInfoComponent } from './user-info/user-info.component';
import { ChartComponent } from './chart/chart.component';
import { EditUserComponent } from './features/edit-user/edit-user.component';

import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';

import { PasswordStrengthMeterModule } from 'angular-password-strength-meter';

@NgModule({
  declarations: [
    DashboardComponent,
    NavBarComponent,
    UserInfoComponent,
    ChartComponent,
    EditUserComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MatButtonModule,
    MatDialogModule,
    ReactiveFormsModule,
    PasswordStrengthMeterModule.forRoot()
  ],
  exports:[NavBarComponent]
})
export class DashboardModule { }
