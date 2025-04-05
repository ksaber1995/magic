import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { combineLatest } from 'rxjs';
import { Role } from '../../../../../model/role';
import { SnackbarService } from '../../../../services/snackbar.service';
import { SwaggerService } from '../../../../swagger/swagger.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrl: './reset-password.component.scss',
})
export class ResetPasswordComponent {
  roles: (Role & { checked?: boolean })[] = [];
  email = this.route.snapshot.paramMap.get('email');
  form = {
    newPassword: '',
    confirmPassword: ''
  };

  isUpdating = false;
  passwordMismatch = false;

  breadcrumbs = [
    {
      label: ' قائمة المستخدمين',
      url: '/main/users',
    },
    {
      label: ' تعديل كلمة المرور',
    },
  ];
  constructor(
    private swagger: SwaggerService,
    private snackbar: SnackbarService,
    private route: ActivatedRoute,
    private fb: FormBuilder
  ) {}
  ngOnInit() {

  }

  onPasswordChange() {
    this.passwordMismatch = this.form.newPassword !== this.form.confirmPassword;
  }

  resetPassword() {
    this.passwordMismatch = this.form.newPassword !== this.form.confirmPassword;

    if (this.passwordMismatch) {
      return; // stop submission if mismatch
    }

    this.isUpdating = true;

    const body = {
      email: this.email,
      password: this.form.newPassword,
      password_confirmation: this.form.confirmPassword,
      token: 'Hs8akLHKGVJrmxwVzDVBb0iPmuD1TXac3jHM7eKPedbc0ff7'
    };

    this.swagger.resetPassword(body).subscribe(
      (res) => {
        this.isUpdating = false;
        this.snackbar.showSuccessSnackbar('تم تعديل كلمة السر');
      },
      (error) => {
        this.isUpdating = false;
        this.snackbar.showError(error.message);
      }
    );
  }
}
