import { Component, Input, viewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { AuthService } from '../../services/auth.service';
import { OtpModalComponent } from '../../otp-modal/otp-modal.component';
import { SwaggerService } from '../../../../swagger/swagger.service';

@Component({
  selector: 'app-code-authenticator',
  templateUrl: './code-authenticator.component.html',
  styleUrl: './code-authenticator.component.scss',
})
export class CodeAuthenticatorComponent {
  otpValue: string;


  type: 'generate' | 'signin' = (this.route.snapshot.queryParamMap.get('type') || 'generate') as 'signin' | 'generate';

  ticket: string = this.route.snapshot.queryParamMap.get('ticket');
  error: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    // private auth: AuthService,
    private swagger: SwaggerService,
    private snackbar: MatSnackBar,
    private dialog: MatDialog
  ) {

  }

  enterCode() {
    if (this.type === 'generate') {
      this.generate();
    } else {
      this.siginInOtp();
    }
  }

  generate() {
    // this.auth.toggle(this.otpValue).subscribe(
    //   (res) => {
    //     this.snackbar.open('Authenticator has been enabled', '', { duration: 3000 });
    //     this.dialog.open(OtpModalComponent).afterClosed().subscribe(res => {
    //       this.router.navigate(['/'])
    //     })
    //   },
    //   (err) => {
    //     this.error = err.error.message;
    //   }
    // );

    // // this.router.navigate(['success-authenticator'])
    // this.auth.logOut();

  }

  siginInOtp() {
    // const body = {
    //   otp: this.otpValue,
    //   ticket: this.ticket,
    // };

    // this.auth.signinOtp(body).subscribe(res => {
    //   if (res.session?.accessToken) {
    //     localStorage.setItem('token', res.session.accessToken);
    //     localStorage.setItem('refreshToken', res.session.refreshToken || '');

    //     this.router.navigate(['/']);
    //   }

    //   if (res.error) {
    //     this.error = res.error?.message
    //   }

    // },
    //   (err) => {
    //     console.log(err.error.message);
    //   }
    // );
  }

  onOtpChange(event: any) {
    this.otpValue = event;
  }
}
