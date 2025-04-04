import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CreateSuccessDialogComponent } from '../modules/shared/components/create-succss-dialog/create-succss-dialog.component';

@Injectable({
  providedIn: 'root'
})
export class SnackbarService {
  constructor(
    private snackBar: MatSnackBar,
    private dialog: MatDialog,

  ) {}
  showSuccess(title: string, route: string) {
    this.dialog.open(CreateSuccessDialogComponent, {data:{
      title,
      route,
    }});


  }

  showSuccessSnackbar(title: string) {
     this.snackBar.open(`${title}`, 'Close', {
      duration: 3000,
      horizontalPosition: 'end',
      verticalPosition: 'top',
      panelClass: ['success-snackbar']
    });

  }

  showError(title: string) {
    // TODO,
    this.snackBar.open(`${title}`, 'Close', {
      duration: 3000,
      horizontalPosition: 'end',
      verticalPosition: 'top',
      panelClass: ['error-snackbar']
    });
  }
}
