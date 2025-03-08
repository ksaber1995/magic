import { Component } from '@angular/core';

interface Decision{
  name:string,
  date:string,
  uploadedFiles:UploadedFiles[],
  description:string,
  id:string,
}
interface UploadedFiles{
  name:string,
  path:string
}
@Component({
  selector: 'app-decision-details',
  templateUrl: './decision-details.component.html',
  styleUrl: './decision-details.component.scss'
})
export class DecisionDetailsComponent {
  decisionDetails : Decision =
    {
      name: 'توجيه سمو أمير منطقة الرياض بما يخص المحضر',
      date: '27-01-2021',
      description:'loreamloreamloreamloreamloream loreamloreamloreamloreamloream sdfaloreamloreamloreamloreamloream loreamloreamloreamloreamloream loreamloreamloreamloreamloream loreamloreamloreamloreamloream loreamloreamloreamloreamloream loreamloreamloreamloreamloream loreamloreamloreamloreamloream ',
      uploadedFiles:[{
        name:'pdf12',
        path:'assets/images/pdf.svg'
      }],
      id:'10000',
    }
}
