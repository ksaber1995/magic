import { Component, OnInit } from '@angular/core';
import { SwaggerService } from '../../../../../swagger/swagger.service';
import { Decision } from '../../../../../../model/decision';
import { ActivatedRoute } from '@angular/router';

interface UploadedFiles {
  name: string,
  path: string
}
@Component({
  selector: 'app-decision-details',
  templateUrl: './decision-details.component.html',
  styleUrl: './decision-details.component.scss'
})
export class DecisionDetailsComponent implements OnInit {
  decisionDetails: Decision;
  id = this.route.snapshot.paramMap.get('id');

  constructor(
    private swagger: SwaggerService,
    private route: ActivatedRoute
  ) {

  }

  ngOnInit(): void {
    this.swagger.getOneDecision(this.id)
    .subscribe(res=>{
      this.decisionDetails = res;
    })
  }

  getFileIcon(name: string){
      if(name.endsWith('.pdf')){
        return 'assets/images/pdf.svg'
      }

      if(name.endsWith('')){
        return 'assets/images/docx-icon.svg'
      }

      return 'assets/images/file.png';
  }

  getFileName(url: string): string {
    return url.split('/').pop() || '';
  }
}
