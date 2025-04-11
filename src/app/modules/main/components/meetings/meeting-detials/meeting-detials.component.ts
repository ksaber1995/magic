import { Component, inject, OnInit } from '@angular/core';
import { SwaggerService } from '../../../../../swagger/swagger.service';
import { Meeting } from '../../../../../../model/meeting';
import { ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { AddMembersToProjectDialogComponent } from '../../programs/procedures/add-members-to-project-dialog/add-members-to-project-dialog.component';
import { FileDetailsComponent } from '../../users/file-details/file-details.component';

@Component({
  selector: 'app-meeting-detials',
  templateUrl: './meeting-detials.component.html',
  styleUrl: './meeting-detials.component.scss'
})
export class MeetingDetialsComponent implements OnInit {
  meeting: Meeting;
  id: number;
  breadCrumbs;
  dialog = inject(MatDialog);
  
  constructor(
    private swagger: SwaggerService, 
    private route: ActivatedRoute
  ){}
  ngOnInit(): void {
    this.id = +this.route.snapshot.paramMap.get('id')
    this.getMeeting()
  }
  getMeeting(){
    this.swagger.getOneMeeting(this.id).subscribe(res =>{
      this.meeting = res
      this.breadCrumbs = [
        {
          label: ' بوابة البرامج',
          url: '/',
        },
        {
          label: 'قائمة الاجتماعات',
          url:'/main/meetings'
        },
        {
          label: this.meeting.meeting_address,
        },
      ];
    })
  }
  openAddMemberModal(){
      const dialogRef = this.dialog.open(AddMembersToProjectDialogComponent, {
        data: {
          meetingId: this.id
        }
      });
  
      dialogRef.afterClosed().subscribe(res=>{
        this.getMeeting();
      })
  }
  openFileDetails(file){
    this.dialog.open(FileDetailsComponent , {
      data:{
        file: file
      }
    })
  }
}
