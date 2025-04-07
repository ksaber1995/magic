import { Component, inject, Input } from '@angular/core';
import { FileItem } from '../../../../../../model/filte';
import { MatDialog } from '@angular/material/dialog';
import { FileDetailsComponent } from '../../users/file-details/file-details.component';

@Component({
  selector: 'app-files-list',
  templateUrl: './files-list.component.html',
  styleUrl: './files-list.component.scss',
})
export class FilesListComponent {
  @Input() files: FileItem[] = [];

  ngOnInit() {

  }

  readonly dialog = inject(MatDialog);
  openDialog(file): void {
    this.dialog.open(FileDetailsComponent, {
      data: { file: file },
    });
  }
}
