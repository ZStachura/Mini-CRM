import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StrenghtmeterComponent } from './strenghtmeter.component';

@NgModule({
    declarations: [
      StrenghtmeterComponent
    ],
    imports: [
      CommonModule,
    ],
    providers:[],
    exports:[StrenghtmeterComponent]
  })
  export class StrenghtmeterModule { }
  