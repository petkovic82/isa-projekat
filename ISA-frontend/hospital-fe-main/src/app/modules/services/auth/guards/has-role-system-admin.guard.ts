import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import {Observable} from 'rxjs';
import {TokenService} from "../../../hospital/navbar/services/token.service";

@Injectable({
  providedIn: 'root'
})
export class HasRoleSystemAdminGuard {

  constructor(private ts: TokenService, private router: Router) {
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    if (this.ts.getRole() === '2') {
      return true;
    } else {
      alert('You dont have permission to see this page')
      return false;
    }
  }
}
