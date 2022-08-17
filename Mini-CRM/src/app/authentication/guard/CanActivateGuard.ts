import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate,RouterStateSnapshot,UrlTree } from "@angular/router";
import { Observable, of } from "rxjs";
import { AuthenticationService } from "../utils/authentication.service";
import { Token } from "./token";

@Injectable()
export class CanActivateGuard implements CanActivate{
    constructor(private storage:AuthenticationService){}
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        //var token:Token=this.storage.get('token')
       // return token.token;
       return true;
    }
}