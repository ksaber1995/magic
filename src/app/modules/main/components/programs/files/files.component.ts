import { Component } from '@angular/core';

@Component({
  selector: 'app-files',
  templateUrl: './files.component.html',
  styleUrl: './files.component.scss',
})
export class FilesComponent {
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
}
