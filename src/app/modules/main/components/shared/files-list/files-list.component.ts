import { Component, inject, Input, OnChanges, OnInit } from '@angular/core';
import { FileItem } from '../../../../../../model/filte';
import { MatDialog } from '@angular/material/dialog';
import { FileDetailsComponent } from '../../users/file-details/file-details.component';

@Component({
  selector: 'app-files-list',
  templateUrl: './files-list.component.html',
  styleUrl: './files-list.component.scss',
})
export class FilesListComponent implements OnInit , OnChanges{
  @Input() files: FileItem[] = [];
  @Input() programName!: string
  breadCrumbs
  ngOnInit() {
  }
  ngOnChanges() {
    this.breadCrumbs = [
      { label: 'البرامج', url: '/' },
      { label: this.programName, url: '/' },
      { label: 'الملفات', url: '/' },
    ];
  }

  readonly dialog = inject(MatDialog);
  openDialog(file): void {
    this.dialog.open(FileDetailsComponent, {
      data: { file: file },
    });
  }
}
