import { Component, OnInit } from '@angular/core';
import { SwaggerService } from '../../../../../swagger/swagger.service';
import { Post } from '../../../../../../model/post';
import { MatDialog } from '@angular/material/dialog';
import { DeleteDialogComponent } from '../../supreme-committee/delete-dialog/delete-dialog.component';
import { SnackbarService } from '../../../../../services/snackbar.service';


@Component({
  selector: 'app-committee-updates-list',
  templateUrl: './committee-updates-list.component.html',
  styleUrl: './committee-updates-list.component.scss'
})
export class CommitteeUpdatesListComponent implements OnInit{

  constructor(
    private swagger: SwaggerService,
    private dialog: MatDialog,
    private snackbar: SnackbarService
  ){}

  posts : Post[] = []

  ngOnInit(): void {
    this.swagger.getAllPosts().subscribe(res=>{
      this.posts = res;
    })
  }


  delete(id: string){
      // this.sw
      const ref = this.dialog.open(DeleteDialogComponent)
      ref.afterClosed().subscribe(res=>{
        if(res){
          this.swagger.deleteMeeting(id)
          .subscribe(()=>{
            const index = this.posts.findIndex(res=> res.id)
            this.posts.splice(index, 1);
            this.snackbar.showSuccess('تم حذف الخبر')
          },error=>{
            this.snackbar.showError(error.message)

          })
        }
      })
    }

}
