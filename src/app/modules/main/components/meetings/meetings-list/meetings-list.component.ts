import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Meeting } from '../../../../../../model/metting';
import { SnackbarService } from '../../../../../services/snackbar.service';
import { SwaggerService } from '../../../../../swagger/swagger.service';
import { DeleteDialogComponent } from '../../supreme-committee/delete-dialog/delete-dialog.component';


// TODO, Ahmed, check  all data
@Component({
  selector: 'app-meetings-list',
  templateUrl: './meetings-list.component.html',
  styleUrl: './meetings-list.component.scss',
})
export class MeetingsListComponent implements OnInit  {

  constructor(
    private swagger: SwaggerService,
    private dialog: MatDialog,
    private snackBar: SnackbarService
  ){

  }

  ngOnInit(): void {
    this.swagger.getAllMeetings().subscribe(res=>{
      this.meetings = res;
    })
  }
  meetings: Meeting[] =[] ;
  meetingDetails(){
    // TODO, Ahmed
  }

  delete(id: string){
    // this.sw
    const ref = this.dialog.open(DeleteDialogComponent)
    ref.afterClosed().subscribe(res=>{
      if(res){
        this.swagger.deleteMeeting(id)
        .subscribe(()=>{
          const index = this.meetings.findIndex(res=> res.id)
          this.meetings.splice(index, 1);
          this.snackBar.showSuccess('تم حذف الاجتماع')
        },error=>{
          this.snackBar.showError(error.message)

        })
      }
    })
  }
}
