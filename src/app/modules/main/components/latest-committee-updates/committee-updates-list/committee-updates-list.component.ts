import { Component, OnInit } from '@angular/core';
import { SwaggerService } from '../../../../../swagger/swagger.service';
import { Post } from '../../../../../../model/post';
import { MatDialog } from '@angular/material/dialog';
import { DeleteDialogComponent } from '../../supreme-committee/delete-dialog/delete-dialog.component';
import { SnackbarService } from '../../../../../services/snackbar.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-committee-updates-list',
  templateUrl: './committee-updates-list.component.html',
  styleUrl: './committee-updates-list.component.scss'
})
export class CommitteeUpdatesListComponent implements OnInit{
  projectId = +this.route.snapshot.paramMap.get('projectId');
  constructor(
    private swagger: SwaggerService,
    private dialog: MatDialog,
    private snackbar: SnackbarService,
    private route: ActivatedRoute
  ){}

  breadCrumbs = [
    {
      label:'بوابة البرامج',
      url:'/'
    },
    {
      label:'قائمة أخر مستجدات اللجنة '
    }
  ]
  posts : Post[] = []

  ngOnInit(): void {
    this.swagger.getAllPosts().subscribe(res=>{
      if(this.projectId){
        res = res.filter(res=> res.project?.id == this.projectId)
      }
      this.posts = res;
    })
  }


  delete(id: number){
      // this.sw
      const ref = this.dialog.open(DeleteDialogComponent)
      ref.afterClosed().subscribe(res=>{
        if(res){
          this.swagger.deletePost(id)
          .subscribe(()=>{
            const index = this.posts.findIndex(res=> res.id === id)
            this.posts.splice(index, 1);
            this.snackbar.showSuccessSnackbar
            ('تم حذف الخبر')
          },error=>{
            this.snackbar.showError(error.message)

          })
        }
      })
    }

}
