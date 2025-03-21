import { Component, Inject, inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-file-details',
  templateUrl: './file-details.component.html',
  styleUrl: './file-details.component.scss'
})
export class FileDetailsComponent {
  file: any; 
  constructor(@Inject(MAT_DIALOG_DATA) public data: { file: any }) {
    this.file = data.file;
    console.log(this.file)
  }
  readonly dialog = inject(MatDialog);
  closeDialog(){
    this.dialog.closeAll()
  }

  downloadFile(){
    
  }
}
