import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import {Observable} from 'rxjs';
import {AuthService} from '../services/auth.service';
import {TokenService} from "../../../hospital/navbar/services/token.service";

@Injectable({
  providedIn: 'root'
})
export class HasRoleEmployeeGuard {

  constructor(private authService: AuthService, private ts: TokenService, private router: Router) {
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    if (this.ts.getRole() === '0') {
      return true;
    } else {
      alert('You dont have permission to see this page')
      return false;
    }
  }
}
