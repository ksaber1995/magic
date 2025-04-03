import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-file-list',
  templateUrl: './file-list.component.html',
  styleUrl: './file-list.component.scss'
})
export class FileListComponent {
  @Input() files: string[] = [];

  getFileIcon(name: string){
    if(name.endsWith('.pdf')){
      return 'assets/images/pdf.svg'
    }

    if(name.endsWith('')){
      return 'assets/images/docx-icon.svg'
    }

    return 'assets/images/file.png';
}

getFileName(url: string): string {
  return url.split('/').pop() || '';
}
}
