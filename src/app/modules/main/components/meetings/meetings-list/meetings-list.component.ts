import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Meeting } from '../../../../../../model/meeting';
import { SnackbarService } from '../../../../../services/snackbar.service';
import { SwaggerService } from '../../../../../swagger/swagger.service';
import { DeleteDialogComponent } from '../../supreme-committee/delete-dialog/delete-dialog.component';


@Component({
  selector: 'app-meetings-list',
  templateUrl: './meetings-list.component.html',
  styleUrl: './meetings-list.component.scss',
})
export class MeetingsListComponent implements OnInit  {

  breadcrumbs = [
    {
      label: ' بوابة البرامج',
      url: '/',
    },
    {
      label: 'الاجتماع',
    },
  ];
  breadCrumbButton = {label:'اضافة اجتماع جديد' , url:'/main/create-meeting'}
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
    // TODO,
  }

  delete(id: number){
    // this.sw
    const ref = this.dialog.open(DeleteDialogComponent)
    ref.afterClosed().subscribe(res=>{
      if(res){
        this.swagger.deleteMeeting(id)
        .subscribe(()=>{
          const index = this.meetings.findIndex(res=> res.id === id)
          this.meetings.splice(index, 1);
          this.snackBar.showSuccessSnackbar('تم حذف الاجتماع')
        },error=>{
          this.snackBar.showError(error.message)

        })
      }
    })
  }
}
