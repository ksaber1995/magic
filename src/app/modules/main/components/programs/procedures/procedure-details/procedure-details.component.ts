import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SwaggerService } from '../../../../../../swagger/swagger.service';
import { Procedure } from '../../../../../../../model/procedure';

@Component({
  selector: 'app-procedure-details',
  templateUrl: './procedure-details.component.html',
  styleUrl: './procedure-details.component.scss'
})
export class ProcedureDetailsComponent implements OnInit {
  procedureId = +this.route.snapshot.paramMap.get('id');
  projectId = +this.route.snapshot.paramMap.get('projectId');
  procedure : Procedure
  isLoaded: boolean;
  breadCrumbs = [
    {
      label:'البرامج',
      url:'/'
    },

  ]
  constructor(
    private route: ActivatedRoute,
    private swagger: SwaggerService,
  ) {

  }

  ngOnInit(): void {
    this.swagger.getOneProcedure(this.procedureId).subscribe(res=>{
      this.procedure =res;
      this.breadCrumbs[1] ={
        label: this.procedure.project?.title,
        url: `/programs/${this.projectId}/procedures`
      }

      this.breadCrumbs[2] = {
        label: this.procedure.title,
        url: ``
      }

      this.isLoaded = true;
    })
  }
}
