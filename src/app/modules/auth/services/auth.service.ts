import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { SwaggerService } from '../../../swagger/swagger.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private swagger: SwaggerService
  ) {
  }
  getValidToken(): Observable<string | null> {
    const token = localStorage.getItem('token');
    return of(token);
    // return this.isTokenValid(token) ? of(token) : of(null);
  }

  isTokenValid(token: string | null): boolean {
    if (!token) return false;
    const expiry = this.getTokenExpiry(token);
    return expiry > Date.now();
  }

  getTokenExpiry(token: string): number {
    try {
      const payload = JSON.parse(atob(token.split('.')[1]));
      return payload.exp * 1000;
    } catch (_) {
      return 0;
    }
  }

  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    this.swagger.logout();
  }

}
