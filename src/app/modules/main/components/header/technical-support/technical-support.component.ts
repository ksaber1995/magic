import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-technical-support',
  templateUrl: './technical-support.component.html',
  styleUrl: './technical-support.component.scss',
})
export class TechnicalSupportComponent implements OnInit {
  readonly dialogRef = inject(MatDialogRef<TechnicalSupportComponent>);
  techincalForm: FormGroup
  constructor(
    private router: Router,
    private fb : FormBuilder
  ){}
  ngOnInit() {
    this.techincalForm = this.fb.group({
      title: [null, [Validators.required]], 
      message: [null , [Validators.required]]
    })
  }
  closeDialog(){
    this.dialogRef.close()
  }
  sendTechincalMessage(){
    
  }
}
