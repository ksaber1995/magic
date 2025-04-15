import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { SwaggerService } from '../../../swagger/swagger.service';
import { User } from '../../../../model/user';

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

  getCurrentUser(): User{
    const user = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : {}

    return user;
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
