import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.css']
})
export class AuthenticationComponent implements OnInit {

  constructor() { }

  signIn:boolean=false;
  signUp:boolean=true;


  ngOnInit(): void {
  }

  changeOverlay(){
    this.signIn=!this.signIn;
    this.signUp=!this.signUp;
  }
}
