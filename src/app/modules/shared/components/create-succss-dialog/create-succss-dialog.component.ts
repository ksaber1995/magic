import { Component, inject } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-succss-dialog',
  templateUrl: './create-succss-dialog.component.html',
  styleUrl: './create-succss-dialog.component.scss'
})
export class CreateSuccssDialogComponent {
  readonly dialogRef = inject(MatDialogRef<CreateSuccssDialogComponent>);
  
  constructor(
    private router : Router
  ){

  }
  
  closeDialog(){
    this.dialogRef.close()
    this.router.navigate(['/main/committee-updates-list'])
  }
}
