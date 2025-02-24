import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  captchaNumber : number = Math.floor(100000 + Math.random() * 900000)
  loginForm : FormGroup
  constructor(
    private fb: FormBuilder, 
    private auth: AuthService, 
    private router : Router
  ){
    this.loginForm = this.fb.group({
      email : [null , [Validators.required , Validators.email]], 
      password: [null , [Validators.required]], 
      captecha : [null , [Validators.required]]
    })
  }
  login(){
    this.router.navigate(['/main'])
  }
}
