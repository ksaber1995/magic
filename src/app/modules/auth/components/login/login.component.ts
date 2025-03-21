import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { SwaggerService } from '../../../../swagger/swagger.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  captchaNumber : number = Math.floor(100000 + Math.random() * 900000)
  loginForm : FormGroup
  errors: any;
  constructor(
    private fb: FormBuilder,
    private swagger: SwaggerService,
    private router : Router
  ){
    this.loginForm = this.fb.group({
      email : ['karim@gmail.com' , [Validators.required , Validators.email]],
      password: ['123456' , [Validators.required]],
      captecha : [null , [Validators.required]]
    })
  }

  login(){
    this.errors = null;
    this.swagger.login({email: this.loginForm.value.email, password: this.loginForm.value.password })
    .subscribe((res:any)=>{

      localStorage.setItem('token', res.token)
      this.router.navigate(['/'])
    },error=>{
      // handle errors
      this.errors  = error.message
    })
  }
}
