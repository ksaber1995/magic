import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  captchaNumber : number = Math.floor(100000 + Math.random() * 900000)
  constructor(){

  }
}
