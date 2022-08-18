import { Component, ElementRef, OnInit, ViewChild, ViewChildren } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import Validation from './utils/validation';
import { AuthenticationService } from './utils/authentication.service';
import { User } from './utils/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.css']
})
export class AuthenticationComponent implements OnInit {

  constructor(private formBuilder: FormBuilder,private storage:AuthenticationService,private router:Router) { }

  signIn:boolean=false;
  signUp:boolean=true;

  //Register
  form: FormGroup = new FormGroup({
    firstname: new FormControl(''),
    lastname:new FormControl(''),
    username: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
    confirmPassword: new FormControl('')
  });
  submitted = false;

  //LogIn
    logform:FormGroup=new FormGroup({
    log_email:new FormControl(''),
    log_password:new FormControl('')
  });
  log=false;

  ngOnInit(): void {
    this.storage.set("token",{token:false})
    //Register
    this.form = this.formBuilder.group(
      {
        firstname: ['',[ Validators.required,Validators.pattern('[a-zA-Z]*')]],
        lastname:['',[ Validators.required,Validators.pattern('[a-zA-Z]*')]],
        username: ['',Validators.required],
        email: ['', [Validators.required, Validators.email]],
        password: [
          '',
          [
            Validators.required,
            Validators.minLength(6),
            Validators.maxLength(40)
          ]
        ],
        confirmPassword: ['', Validators.required]
      },
      {
        validators: [Validation.match('password', 'confirmPassword')]
      }
    );
    //LogIn
    this.logform=this.formBuilder.group(
      {
        log_email:['',[Validators.required,Validators.email]],
        log_password:['',[Validators.required]]
      }
    )
  }

  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }

  get g(): { [key: string]: AbstractControl } {
    return this.logform.controls;
  }


  //registration
  onSubmit(): void {
    this.submitted = true;
    if (this.form.invalid) {
      return;
    }
    else{
      this.storage.set(this.form.controls['email'].value,{firstname:this.form.controls['firstname'].value,lastname:this.form.controls['lastname'].value,username:this.form.controls['username'].value,email:this.form.controls['email'].value,password:this.form.controls['password'].value})
      this.changeOverlay();
    }
    console.log(JSON.stringify(this.form.value, null, 2));
  }
  onReset(): void {
    this.submitted = false;
    this.form.reset();
  }


  //logIn
   tryToLogIn():void{
    this.log=true;
    if(this.logform.invalid)
    {
      this.storage.set("token",{token:false})
      return;
    }
    var user:User=(this.storage.get(this.logform.controls['log_email'].value))
    if(this.logform.controls["log_password"].value==user.password)
    {
      this.storage.set('current',this.logform.controls['log_email'].value)
      this.storage.set("token",{token:true})
      this.router.navigate(['/dashboard'])
    }
    console.log(JSON.stringify(this.logform.value,null,2));
   }

   logreset():void{
    this.log=false;
    this.logform.reset();
   }

  //overlays
  changeOverlay(){
    this.signIn=!this.signIn;
    this.signUp=!this.signUp;
  }
}
