import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { SwaggerService } from '../../../../../../swagger/swagger.service';

@Component({
  selector: 'app-create-procedures',
  templateUrl: './create-procedures.component.html',
  styleUrl: './create-procedures.component.scss'
})
export class CreateProceduresComponent implements OnInit {
  id!:string
  procedureForm: FormGroup
  user
  isUpdating: boolean;

  constructor(
    private route : ActivatedRoute,
    private fb: FormBuilder,
    private swagger : SwaggerService
  ){
    this.id = this.route.snapshot.paramMap.get('id');
  }

  ngOnInit() {
    this.swagger.getAllUsers().subscribe(res=>{

      console.log(res)
    })
    this.procedureForm = this.fb.group({
      files: [[]],

    })
  }
  breadCrumbs = [
    {
      label:'البرامج',
      url:'/'
    },
    {
      label:'إدارة النفايات البلدية الصلبة',
      url:`/main/programs/${this.id}/procedures`,
    },
    {
      label:'اضافة اجراء جديد'
    }
  ]
   get filesControl() {
      return this.procedureForm.get('files') as FormControl;
    }
    formatLabel(value: number): string {
      return `${value} %`;
    }
}
