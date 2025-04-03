import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { ForgetPasswordComponent } from './components/forget-password/forget-password.component';
import { RegisterMfaComponent } from './register-mfa/register-mfa.component';
import { SetAuthenticatorComponent } from './components/set-authenticator/set-authenticator.component';
import { QrAuthenticatorComponent } from './components/qr-authenticator/qr-authenticator.component';
import { SuccessAuthenticatorComponent } from './components/success-authenticator/success-authenticator.component';
import { CodeAuthenticatorComponent } from './components/code-authenticator/code-authenticator.component';

const routes: Routes = [
  {path: '' , component: LoginComponent},
  {path:'forget-password', component: ForgetPasswordComponent},
  {path:'register-mfa', component: RegisterMfaComponent},

  {path: 'set-authenticator', component: SetAuthenticatorComponent},
  {path: 'qr-authenticator', component: QrAuthenticatorComponent},
  {path: 'success-authenticator', component: SuccessAuthenticatorComponent},
  {path: 'code-authenticator', component: CodeAuthenticatorComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
