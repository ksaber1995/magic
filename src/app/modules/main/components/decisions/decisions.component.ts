import { Component, OnInit } from '@angular/core';
import { SwaggerService } from '../../../../swagger/swagger.service';

@Component({
  selector: 'app-decisions',
  templateUrl: './decisions.component.html',
  styleUrl: './decisions.component.scss'
})
export class DecisionsComponent implements OnInit{
  decisions: any;

  constructor(
    private swagger: SwaggerService,
  ) { }

  ngOnInit(): void {
      this.swagger.getAllDecisions().subscribe((res) => {
        this.decisions = res;
      });
  }
}
