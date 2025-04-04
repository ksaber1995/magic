import { Component, Inject, inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';


interface DialogData {
  title: string;
  message: string;
  route: string;
}

@Component({
  selector: 'app-create-succss-dialog',
  templateUrl: './create-succss-dialog.component.html',
  styleUrl: './create-succss-dialog.component.scss'
})
export class CreateSuccessDialogComponent {
  readonly dialogRef = inject(MatDialogRef<CreateSuccessDialogComponent>);

  constructor(
    private router : Router,
    @Inject(MAT_DIALOG_DATA) public data: DialogData

  ){

  }

  closeDialog(){
    this.dialogRef.close()
    if(this.data.route){
      this.router.navigate([this.data.route])
    }
  }
}
