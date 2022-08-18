import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { AuthenticationService } from './utils/authentication.service';

import { AuthenticationRoutingModule } from './authentication-routing.module';
import { AuthenticationComponent } from './authentication.component';
import { StrenghtmeterModule } from '../features/passwordStrength/strenghtmeter/strenghtmeter.module';
@NgModule({
  declarations: [
    AuthenticationComponent
  ],
  imports: [
    CommonModule,
    AuthenticationRoutingModule,
    ReactiveFormsModule,
    StrenghtmeterModule
  ],
  providers:[AuthenticationService]
})
export class AuthenticationModule { }
