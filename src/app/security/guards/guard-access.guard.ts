import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { TokenService } from '../servicies/token.service';

@Injectable({
  providedIn: 'root'
})

export class GuardAccessGuard implements CanActivate {
  constructor(private tokenService: TokenService, private router: Router) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const expectedRol = route.data.expectedRol;
    if (!this.tokenService.getToken()) {
      this.router.navigate(['']);
      return false;
    }
    return true;
  }

}
