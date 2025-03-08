import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-create-decision',
  templateUrl: './create-decision.component.html',
  styleUrl: './create-decision.component.scss',
})
export class CreateDecisionComponent implements OnInit {
  @ViewChild('dateInput') dateInput!: ElementRef;
  
  programs = [
    {
      id: '012',
      name: 'مراقبة الانبعاثات من محطات توليد الكهرباء',
    },
    {
      id: '012',
      name: 'مراقبة الانبعاثات من محطات توليد الكهرباء',
    },
    {
      id: '012',
      name: 'مراقبة الانبعاثات من محطات توليد الكهرباء',
    },
    {
      id: '012',
      name: 'مراقبة الانبعاثات من محطات توليد الكهرباء',
    },
    {
      id: '012',
      name: 'مراقبة الانبعاثات من محطات توليد الكهرباء',
    },
    {
      id: '012',
      name: 'مراقبة الانبعاثات من محطات توليد الكهرباء',
    },
    {
      id: '012',
      name: 'مراقبة الانبعاثات من محطات توليد الكهرباء',
    },
    {
      id: '012',
      name: 'مراقبة الانبعاثات من محطات توليد الكهرباء',
    },
    {
      id: '012',
      name: 'مراقبة الانبعاثات من محطات توليد الكهرباء',
    },
    {
      id: '012',
      name: 'مراقبة الانبعاثات من محطات توليد الكهرباء',
    },
  ];
  progressValue: number = 0;
  decisionForm : FormGroup
  constructor(
    private fb : FormBuilder
  ){}
  ngOnInit(): void {
    this.decisionForm = this.fb.group({
      program: [null ],
      address: [null], 
      descrpitioon:[null],
      uploadedFiles: this.fb.array([]),
      progressPercent:[null], 
      status:[null],
      date:[null]
    })
  }

  updateProgress(event: Event) {
    this.progressValue = (event.target as HTMLInputElement).valueAsNumber;
  }

  setTodayDate() {
    this.decisionForm.get('date').setValue(new Date().toISOString().split('T')[0])
  }
  createDecision(){
    console.log(this.decisionForm.value)
  }
}
