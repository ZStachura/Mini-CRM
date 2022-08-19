import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/authentication/utils/authentication.service';
import { User } from 'src/app/authentication/utils/user';
import { MatDialog,MatDialogRef } from '@angular/material/dialog';
import { EditUserComponent } from '../features/edit-user/edit-user.component';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent implements OnInit {

  constructor(private storage:AuthenticationService,public dialog:MatDialog) { }

  firstname:string=''
  lastname:string=''
  username:string=''
  email:string=''
  password:string=''
  currentuser:string=''

  ngOnInit() {
    this.currentuser=this.storage.get('current')
    var user:User=this.storage.get(this.currentuser)
    this.firstname=user.firstname
    this.lastname=user.lastname
    this.username=user.username
    this.email=user.email
    this.password=user.password
  }

  openModal(){
    this.dialog.open(EditUserComponent,{data:{current:this.currentuser,id:this.username}}).afterClosed().subscribe(()=>window.location.reload())
  }

}
