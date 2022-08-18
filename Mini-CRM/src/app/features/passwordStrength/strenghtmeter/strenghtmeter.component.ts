import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-strenghtmeter',
  templateUrl: './strenghtmeter.component.html',
  styleUrls: ['./strenghtmeter.component.css']
})
export class StrenghtmeterComponent implements OnChanges {

  @Input()
  password!: string;

  regexForLowerLetter: RegExp = /[a-z]/;
  regexForUpperLetter: RegExp = /[A-Z]/;
  regexForSpecialCharacter: RegExp = /[-+_!@#$%^&*.,?{}()\[\]]/
  passwordStrength: number = 0;

  lowerLetterScore: number = 0;
  upperLetterScore: number = 0;
  specialCharacterScore: number = 0;

  containsLowerCaseLetter: boolean = false;
  containsUpperCaseLetter: boolean = false;
  containsSpecialCharacter: boolean = false;

  weakPasswordClass: string = 'password-strength-background';
  averagePasswordClass: string = 'password-strength-background';
  goodPasswordClass: string = 'password-strength-background';

  constructor() { }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['password']) {
      this.checkPasswordStrength(this.password)
    }}

  checkPasswordStrength(password: string){
    if (password.match(this.regexForLowerLetter)) {
      this.lowerLetterScore = 1;
      this.containsLowerCaseLetter = true;
    } else {
      this.lowerLetterScore = 0;
      this.containsLowerCaseLetter = false;
    }

    if (password.match(this.regexForUpperLetter)) {
      this.upperLetterScore = 1;
      this.containsUpperCaseLetter = true;
    } else {
      this.upperLetterScore = 0;
      this.containsUpperCaseLetter = false;
    }

    if (password.match(this.regexForSpecialCharacter)) {
      this.specialCharacterScore = 1;
      this.containsSpecialCharacter = true;
    } else {
      this.specialCharacterScore = 0;
      this.containsSpecialCharacter = false;
    }

    this.passwordStrength =this.lowerLetterScore + this.upperLetterScore
    +this.specialCharacterScore;

    if (this.passwordStrength < 1) {
      this.weakPasswordClass = 'password-strength-background';
      this.averagePasswordClass = 'password-strength-background';
      this.goodPasswordClass = 'password-strength-background';
    } else if (this.passwordStrength === 1) {
      this.weakPasswordClass = 'weak-password';
      this.averagePasswordClass = 'password-strength-background';
      this.goodPasswordClass = 'password-strength-background';
    } else if (this.passwordStrength === 2) {
      this.weakPasswordClass = 'average-password';
      this.averagePasswordClass = 'average-password';
      this.goodPasswordClass = 'password-strength-background';
    } else if (this.passwordStrength === 3) {
      this.weakPasswordClass = 'good-password';
      this.averagePasswordClass = 'good-password';
      this.goodPasswordClass = 'good-password';
    }


  }

}
