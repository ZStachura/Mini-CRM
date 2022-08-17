import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import Validation from './utils/validation';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.css']
})
export class AuthenticationComponent implements OnInit {

  constructor(private formBuilder: FormBuilder) { }

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
    email:new FormControl(''),
    password:new FormControl('')
  });
  log=false;

  ngOnInit(): void {
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
        email:['',[Validators.required,Validators.email]],
        password:['',[Validators.required]]
      }
    )
  }

  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }

  //registration
  onSubmit(): void {
    this.submitted = true;
    if (this.form.invalid) {
      return;
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
      return;
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
