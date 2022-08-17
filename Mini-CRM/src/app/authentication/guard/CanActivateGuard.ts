import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate,RouterStateSnapshot,UrlTree } from "@angular/router";
import { Observable, of } from "rxjs";
import { AuthenticationService } from "../utils/authentication.service";
import { Token } from "./token";
import { Router } from "@angular/router";

@Injectable({
    providedIn:'root'
})
export class CanActivateGuard implements CanActivate{
    constructor(private storage:AuthenticationService, private router:Router){}
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        var token:Token=this.storage.get('token')
        if(token.token==true)
        {
            return true
        }
        return false
    }
}