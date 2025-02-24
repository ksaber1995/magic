import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { SharedModule } from '../shared/shared.module';
import { LoginComponent } from './components/login/login.component';
import { ForgetPasswordComponent } from './components/forget-password/forget-password.component';


@NgModule({
  declarations: [LoginComponent, ForgetPasswordComponent],
  imports: [
    CommonModule,
    AuthRoutingModule, 
    SharedModule
  ]
})
export class AuthModule { }
