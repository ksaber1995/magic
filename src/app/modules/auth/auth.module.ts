import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { RecaptchaFormsModule, RecaptchaModule } from 'ng-recaptcha';
import { SharedModule } from '../shared/shared.module';
import { AuthRoutingModule } from './auth-routing.module';
import { CodeAuthenticatorComponent } from './components/code-authenticator/code-authenticator.component';
import { ForgetPasswordComponent } from './components/forget-password/forget-password.component';
import { LoginComponent } from './components/login/login.component';
import { QrAuthenticatorComponent } from './components/qr-authenticator/qr-authenticator.component';
import { SetAuthenticatorComponent } from './components/set-authenticator/set-authenticator.component';
import { OtpModalComponent } from './otp-modal/otp-modal.component';
import { RegisterMfaComponent } from './register-mfa/register-mfa.component';
import { SuccessAuthenticatorComponent } from './components/success-authenticator/success-authenticator.component';

@NgModule({
  declarations: [
    LoginComponent,
    SetAuthenticatorComponent,
    QrAuthenticatorComponent,
    ForgetPasswordComponent,
    RegisterMfaComponent,
    CodeAuthenticatorComponent,
    OtpModalComponent,
    SuccessAuthenticatorComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    SharedModule,
    RecaptchaModule,
    RecaptchaFormsModule,
  ],
})
export class AuthModule {}
