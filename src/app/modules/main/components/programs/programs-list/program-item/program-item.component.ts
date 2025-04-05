import { MatDialog } from '@angular/material/dialog';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Project } from '../../../../../../../model/project';
import { DeleteDialogComponent } from '../../../supreme-committee/delete-dialog/delete-dialog.component';

@Component({
  selector: 'app-program-item',
  templateUrl: './program-item.component.html',
  styleUrl: './program-item.component.scss'
})
export class ProgramItemComponent {
  @Input() project: Project;
  @Output() delete = new EventEmitter<{id:number}>();
  constructor(
    private dialog: MatDialog
  ){}

  deleteProject(id){
    const ref = this.dialog.open(DeleteDialogComponent)

    ref.afterClosed().subscribe(res=>{
      if(res){
        this.delete.emit({id})
      }
    })
  }
}
