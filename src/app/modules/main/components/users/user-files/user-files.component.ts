import { Component, inject, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FileDetailsComponent } from '../file-details/file-details.component';

@Component({
  selector: 'app-user-files',
  templateUrl: './user-files.component.html',
  styleUrl: './user-files.component.scss',
})
export class UserFilesComponent implements OnInit {
  @Input() inputFiles
  files = [
    {
      title: 'M 0',
      date: '2017-12-04',
      fileType: 'pdf',
      name: 'pdf1',
    },
    {
      title: 'M 0',
      date: '2017-12-04',
      fileType: 'docx',
      name: 'pdf1',
    },
    {
      title: 'M 0',
      date: '2017-12-04',
      fileType: 'pdf',
      name: 'pdf1',
    },
    {
      title: 'M 0',
      date: '2017-12-04',
      fileType: 'pdf',
      name: 'pdf1',
    },
    {
      title: 'M 0',
      date: '2017-12-04',
      fileType: 'pdf',
      name: 'pdf1',
    },
    {
      title: 'M 0',
      date: '2017-12-04',
      fileType: 'pdf',
      name: 'pdf1',
    },
  ];
  ngOnInit() {
    if(this.inputFiles?.length > 0){
      this.files = this.inputFiles
    }
  }


  readonly dialog = inject(MatDialog);
  openDialog(file): void {
    this.dialog.open(FileDetailsComponent, {
      data: { file: file },
    });
  }
}
