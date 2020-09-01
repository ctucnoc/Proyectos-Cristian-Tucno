import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { TokenService } from 'src/app/security/servicies/token.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthInterceptorService implements HttpInterceptor {

  constructor(private tokenService: TokenService) { }
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let autRque = request;
    const token = this.tokenService.getToken();
    if (token != null) {
      autRque = request.clone({
        setHeaders: { authorization: `Bearer ${token}` }
      });
    }
    return next.handle(autRque);
  }
}
