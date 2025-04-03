import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, switchMap } from 'rxjs/operators';
import { Router } from '@angular/router';
import { AuthService } from '../modules/auth/services/auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private authService: AuthService, private router: Router) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return this.authService.getValidToken().pipe(
      switchMap(token => {

        // if (token) {
          req = req.clone({
            setHeaders: { Authorization: `Bearer ${'Hs8akLHKGVJrmxwVzDVBb0iPmuD1TXac3jHM7eKPedbc0ff7'}` }
          });
        // }
        return next.handle(req);
      }),
      catchError((error: HttpErrorResponse) => {
        // if (error.status === 401) {
        //   this.authService.logout();
        //   this.router.navigate(['/login/']);
        // }
        return throwError(() => error.error);
      })
    );
  }
}
