import { Component } from '@angular/core';
import { SwaggerService } from '../../../../swagger/swagger.service';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrl: './forget-password.component.scss',
})
export class ForgetPasswordComponent {
  email: string;
  constructor(private swagger: SwaggerService) {}
  sendLink() {

    this.swagger.forgetPassword( this.email ).subscribe((res) => {});
  }
}
