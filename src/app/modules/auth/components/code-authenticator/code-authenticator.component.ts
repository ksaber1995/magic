import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { SnackbarService } from '../../../../services/snackbar.service';
import { SwaggerService } from '../../../../swagger/swagger.service';

@Component({
  selector: 'app-code-authenticator',
  templateUrl: './code-authenticator.component.html',
  styleUrl: './code-authenticator.component.scss',
})
export class CodeAuthenticatorComponent {
  otpValue: string;


  @Input() type: 'generate' | 'signin' = (this.route.snapshot.queryParamMap.get('type') || 'generate') as 'signin' | 'generate';
  @Output() dismiss = new EventEmitter();
  @Output() mfaEntered = new EventEmitter<string>();
  ticket: string = this.route.snapshot.queryParamMap.get('ticket');
  error: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    // private auth: AuthService,
    private swagger: SwaggerService,
    private snackbar: SnackbarService,
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
    this.swagger.verifyMfa({ one_time_password: +this.otpValue }).subscribe(res => {
      if (res) {
        this.snackbar.showSuccess('تم اضافة الكود بنجاح', "/login")
      }
    })
  }

  onOtpChange(event: any) {
    this.otpValue = event;
  }
}
