import { ActivatedRoute } from '@angular/router';
import { Component } from '@angular/core';
import { SwaggerService } from '../../../../swagger/swagger.service';

@Component({
  selector: 'app-project-decisions',
  templateUrl: './project-decisions.component.html',
  styleUrl: './project-decisions.component.scss'
})
export class ProjectDecisionsComponent {
  decisions: any;
  id = +this.route.snapshot.paramMap.get('id');

  constructor(
    private swagger: SwaggerService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.swagger.getAllDecisions().subscribe(res => {
      this.decisions = res.filter(res=>  res.project?.id === this.id);

    });
  }
}
