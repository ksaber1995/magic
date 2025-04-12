import { MatDialog } from '@angular/material/dialog';
import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { Project } from '../../../../../../../model/project';
import { DeleteDialogComponent } from '../../../supreme-committee/delete-dialog/delete-dialog.component';

export enum viewType {
  ViewOne = 1,
  viewTwo = 2,
}
@Component({
  selector: 'app-program-item',
  templateUrl: './program-item.component.html',
  styleUrl: './program-item.component.scss',
})
export class ProgramItemComponent implements OnInit {
  @Output() delete = new EventEmitter<{ id: number }>();
  @Input() project: Project;
  @Input() viewMode: viewType = 1;
  viewEnum = viewType;
  constructor(private dialog: MatDialog) {}
  ngOnInit() {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['viewMode']) {
      console.log(this.viewMode);
    }
  }
  deleteProject(id) {
    const ref = this.dialog.open(DeleteDialogComponent);

    ref.afterClosed().subscribe((res) => {
      if (res) {
        this.delete.emit({ id });
      }
    });
  }
}
