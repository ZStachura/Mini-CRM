import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/authentication/utils/authentication.service';
import { User } from 'src/app/authentication/utils/user';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent implements OnInit {

  constructor(private storage:AuthenticationService) { }

  firstname:string=''
  lastname:string=''
  username:string=''
  email:string=''
  password:string=''

  ngOnInit() {
    var currentuser=this.storage.get('current')
    var user:User=this.storage.get(currentuser)
    this.firstname=user.firstname
    this.lastname=user.lastname
    this.username=user.username
    this.email=user.email
    this.password=user.password
  }

}
