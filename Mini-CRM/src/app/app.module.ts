import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { RouterModule} from '@angular/router';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { SvgServiceService } from './icons/svgService.service';

function initializeApp(svgService: SvgServiceService):()=>Promise<void>
{
  return()=>new Promise(async(resolve,reject)=>{
    svgService.registerAllIcons()
    resolve()})
}

@NgModule({
  declarations: [	
    AppComponent,
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    RouterModule,
    HttpClientModule,
  ],
  providers: [{provide:APP_INITIALIZER,useFactory:initializeApp,deps:[SvgServiceService],multi:true}],
  bootstrap: [AppComponent],
  exports:[]
})
export class AppModule { }
