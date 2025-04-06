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
  }
  readonly dialog = inject(MatDialog);
  closeDialog(){
    this.dialog.closeAll()
  }

  downloadFile(url: string, filename?: string) {
    fetch(url)
      .then(response => {
        if (!response.ok) throw new Error('Network response was not ok');
        return response.blob();
      })
      .then(blob => {
        const blobUrl = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = blobUrl;
        a.download = filename || url.split('/').pop() || 'download';
        document.body.appendChild(a);
        a.click();
        a.remove();
        window.URL.revokeObjectURL(blobUrl);
      })
      .catch(error => {
        console.error('Download error:', error);
      });
  }
}
