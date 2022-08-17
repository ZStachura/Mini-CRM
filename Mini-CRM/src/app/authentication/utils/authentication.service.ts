import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  userstate:any;

constructor() { }

//key==email
set(key:string, value:any){
  try{
    localStorage.setItem(key,JSON.stringify(value));
  }
  catch(err){
    console.error("Error while loading local storage",err)
  }
}
get(key: string): any {
  try {
    return JSON.parse(localStorage.getItem(key)|| "");
  } catch (err) {
    console.error('Error while getting local storage key ', key, err);
    return '';
  }
}
}

