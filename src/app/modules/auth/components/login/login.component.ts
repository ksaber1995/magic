import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SwaggerService } from '../../../../swagger/swagger.service';

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
  constructor(
    private fb: FormBuilder,
    private swagger: SwaggerService,
    private router: Router
  ) {
    this.loginForm = this.fb.group({
      email: ['karim@gmail.com', [Validators.required, Validators.email]],
      password: ['123456', [Validators.required]],
    });
  }

  validateCaptcha() {
    if (window['grecaptcha']) {
      grecaptcha.ready(() => {
        grecaptcha
          .execute('6Ldiy_0qAAAAAHaLWSfUDA0imzFPTeMaE9rIchic', {
            action: 'login',
          })
          .then((token: string) => {
            console.log('reCAPTCHA Token:', token);
            this.login(token);
          });
      });
    } else {
      console.error('reCAPTCHA is not defined.');
    }
  }

  login(recaptcha_token: string) {
    this.isUpdating = true;

    this.errors = null;
    this.swagger
      .login({
        email: this.loginForm.value.email,
        password: this.loginForm.value.password,
        recaptcha_token,
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


          if(error.error == '2FA code is required'){
            // debugger
            this.router.navigate(['/login/register-mfa'], {
              queryParams: {
                email: this.loginForm.value.email,
              },
            })
          }



          this.errors = error.message || error.error;
          if (error.errors?.email) {
            this.errorMessage = 'حقل البريد الالكتروني مطلوب.';
          } else if (error.errors?.password) {
            this.errorMessage = 'حقل كلمة المرور مطلوب.';
          } else if (error.error == 'Unauthorized') {
            this.errorMessage =
              'بيانات الاعتماد هذه غير متطابقة مع البيانات المسجلة لدينا.';
          } else {
            this.errorMessage = 'خطأ في كود التحقق';
          }
        }
      );
  }
}
