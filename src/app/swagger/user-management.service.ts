import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ENDPOINT_URI } from './utlity';

@Injectable({
  providedIn: 'root'
})
export class UserManagementService {
constructor(private http: HttpClient){}

  assignRole( body: {email: string, password: string}){
    const url = ENDPOINT_URI + 'login'
    return this.http.post(url, body);
  }

}
