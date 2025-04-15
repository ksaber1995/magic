import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SwaggerService } from '../../../../swagger/swagger.service';
import { SnackbarService } from '../../../../services/snackbar.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  // captchaNumber : number = Math.floor(100000 + Math.random() * 900000)
  loginForm: FormGroup;
  errors: any;
  errorMessage: string;
  isUpdating;
  showMFAValidator: boolean;

  constructor(
    private fb: FormBuilder,
    private swagger: SwaggerService,
    private router: Router,
    private snackbar: SnackbarService
  ) {
    this.loginForm = this.fb.group({
      email: ['karim@gmail.com', [Validators.required, Validators.email]],
      password: ['123456', [Validators.required]],
    });
  }

  validateCaptcha(otp?: number) {
    if (window['grecaptcha']) {
      grecaptcha.ready(() => {
        grecaptcha
          .execute('6Ldiy_0qAAAAAHaLWSfUDA0imzFPTeMaE9rIchic', {
            action: 'login',
          })
          .then((token: string) => {
            console.log('reCAPTCHA Token:', token);
            this.login(token, otp);
          });
      });
    } else {
      console.error('reCAPTCHA is not defined.');
    }
  }

  checkIfEmailRequiredMFA(){
    this.swagger.isEmailRequiredMFA(this.loginForm.value.email)
    .subscribe(res=>{
      if(res.message === '2FA code required'){
        this.showMFAValidator = true;
      }else{
        this.validateCaptcha();
      }
    })
  }

  login(recaptcha_token: string, one_time_password?: number) {
    this.isUpdating = true;

    this.errors = null;
    this.swagger
      .login({
        email: this.loginForm.value.email,
        password: this.loginForm.value.password,
        recaptcha_token,
        one_time_password
      })
      .subscribe(
        (res: any) => {
          this.isUpdating = false;
          localStorage.setItem('token', res.token);
          localStorage.setItem('user', JSON.stringify(res.user));
          this.router.navigate(['/']);
        },
        (error) => {
          this.isUpdating = false;
          console.log(error.error);
          // handle errors
          this.errors = error.message || error.error;

          if(typeof error.error === 'string'){
            this.snackbar.showError(error.error);
          }else if (error.errors?.email) {
            this.errorMessage = 'حقل البريد الالكتروني مطلوب.';
          } else if (error.errors?.password) {
            this.errorMessage = 'حقل كلمة المرور مطلوب.';
          } else {
            this.errorMessage = 'خطأ في كود التحقق';
          }
        }
      );
  }
}
