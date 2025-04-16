import { Component, OnInit } from '@angular/core';
import { SwaggerService } from '../../../../../swagger/swagger.service';
import { ActivatedRoute } from '@angular/router';
import { Member } from '../../../../../../model/member';
import { MatDialog } from '@angular/material/dialog';
import { SnackbarService } from '../../../../../services/snackbar.service';
import { DeleteDialogComponent } from '../../supreme-committee/delete-dialog/delete-dialog.component';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrl: './members.component.scss'
})
export class MembersComponent implements OnInit {
  members : Member[] = []

  breadCrumbs = [
    {
      label:'البرامج',
      url:''
    },

    {
      label:'البرامج',
      url:''
    },
    {
      label:'اعضاء اللحنة ',
    },
  ]
  id: string;
  selectedMemberIds: Set<string> = new Set();

  constructor(
    private swagger : SwaggerService,
    private route : ActivatedRoute,
    private dialog: MatDialog,
    private snackbar: SnackbarService
  ){

  }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id')
    this.swagger.getOneProject(this.id).subscribe((res:any)=>{
      this.members = res.members
      console.log(this.members)
    })
  }

  showDetails(memberId: string): void {
    if (this.selectedMemberIds.has(memberId)) {
      this.selectedMemberIds.delete(memberId); // Hide details if already shown
    } else {
      this.selectedMemberIds.add(memberId); // Show details
    }
  }

  deleteMemberDialog(id: number){
    const dialogRef = this.dialog.open(DeleteDialogComponent);

    dialogRef.afterClosed().subscribe((res) => {
      if (res) {
        this.deleteMember(id)
      }
    });


  }

  deleteMember(id: number){
    this.swagger.deleteMember(id).subscribe((res:any)=>{
      this.snackbar.showSuccessSnackbar('تم حذف العضو بنجاح')
      this.swagger.getOneProject(this.id).subscribe((res:any)=>{
        this.members = res.members
        console.log(this.members)
      }, error=>{
        this.snackbar.showError(error.message)
      })
    })
  }
}
