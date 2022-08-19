import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/authentication/utils/user';
import { AuthenticationService } from 'src/app/authentication/utils/authentication.service';
import Validation from 'src/app/authentication/utils/validation';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data:{current:string,id:string}, private storage:AuthenticationService,private formBuilder: FormBuilder, public dialogRef:MatDialogRef<EditUserComponent>) {}

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

  ngOnInit() {
    //get data
    var user:User=this.storage.get(this.data.current)
    //Register
    this.form = this.formBuilder.group(
      {
        firstname: [user.firstname,[ Validators.required,Validators.pattern('[a-zA-Z]*')]],
        lastname:[user.lastname,[ Validators.required,Validators.pattern('[a-zA-Z]*')]],
        username: [user.username,Validators.required],
        email: [user.email, [Validators.required, Validators.email]],
        password: [
          user.password,
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
      else{
        this.storage.set(this.form.controls['email'].value,{firstname:this.form.controls['firstname'].value,lastname:this.form.controls['lastname'].value,username:this.form.controls['username'].value,email:this.form.controls['email'].value,password:this.form.controls['password'].value})
        this.dialogRef.close();
      }
      console.log(JSON.stringify(this.form.value, null, 2));
    }
    onReset(): void {
      this.submitted = false;
      this.form.reset();
    }
  
}
