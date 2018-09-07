import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot, CanActivateChild, NavigationExtras, CanLoad, Route } from '@angular/router';
import { ServiceMaster } from './serviceMaster';


@Injectable()
export class LoginGuard implements CanActivate, CanActivateChild, CanLoad {
    constructor(private svc: ServiceMaster, private router: Router) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {

      if (this.svc.loginService.isLoggedIn) {
        return true;
      }
      else {
        this.router.navigate(['/login']);
        return false;
      }
    }

    canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        return this.canActivate(route, state);
    }

    canLoad(route: Route): boolean {

        let url = `/${route.path}`;
        return this.checkLogin(url);
    }

    checkLogin(url: string): boolean {

        if (this.svc.loginService.isLoggedIn) {
            return true;
        }

        //this.loginService.loginRedirectUrl = url;
        this.router.navigate(['/login']);

        return false;
    }
}
