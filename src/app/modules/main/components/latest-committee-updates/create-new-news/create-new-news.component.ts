import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { CreateSuccssDialogComponent } from '../../../../shared/components/create-succss-dialog/create-succss-dialog.component';

@Component({
  selector: 'app-create-new-news',
  templateUrl: './create-new-news.component.html',
  styleUrl: './create-new-news.component.scss'
})
export class CreateNewNewsComponent implements OnInit {
  newsForm : FormGroup;
  dialog = inject(MatDialog)
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
  constructor(
    private fb : FormBuilder
  ){
    
  }
  ngOnInit(): void {
    this.newsForm = this.fb.group({
      address: [null], 
      program: [null],
      image:[], 
      description:[null],
      uploadedFiles: this.fb.array([])
    })
  }
  createNews(){
    this.dialog.open(CreateSuccssDialogComponent)
  }
}
