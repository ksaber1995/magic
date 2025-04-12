import { Component, OnInit } from '@angular/core';
import { FileItem } from '../../../../../../model/filte';
import { SwaggerService } from '../../../../../swagger/swagger.service';
import { combineLatest, map } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-programs-files',
  templateUrl: './programs-files.component.html',
  styleUrl: './programs-files.component.scss',
})
export class ProgramFilesComponent implements OnInit{
 files: FileItem[] = [];
 projectId= +this.route.snapshot.paramMap.get('id');
 programName: string;

 constructor(
  private route: ActivatedRoute,
  private swagger: SwaggerService
){}

 ngOnInit(): void {
  this.getData()
 }

   getData() {
     const decisions$ = this.swagger
       .getAllDecisions()
       .pipe(
         map((res) => res.filter((res) => res.project?.id == +this.projectId))
       );

      const posts$ = this.swagger
       .getAllPosts()
       .pipe(
         map((res) => res.filter((res) => res.project?.id == +this.projectId))
       );

       const procedures$ = this.swagger.getProcedureByProjectId(+this.projectId);
       const project$ = this.swagger.getOneProject(+this.projectId);

       combineLatest([decisions$, posts$, procedures$, project$]).subscribe(([decisions, posts, procedures, project]) => {

         const decisionsFiles  = decisions.map((res) => res.files as FileItem[])?.flat();
         const postsFiles = posts.map((res) => res.files as FileItem[]).flat();
         const proceduresFiles = procedures.map((res) => res.files as FileItem[]).flat();
         this.programName = project.title
         this.files = [...decisionsFiles, ...postsFiles, ...proceduresFiles].map(res=> ({...res, size: res.size / 1024, fileType: res.name.split('.').pop()}));
         console.log({ files: this.files})
       })

   }
}
