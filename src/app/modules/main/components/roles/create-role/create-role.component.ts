import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-role',
  templateUrl: './create-role.component.html',
  styleUrl: './create-role.component.scss',
})
export class CreateRoleComponent {
  roleForm: FormGroup;
  colors = [
    {
      color: 'اللون الأحمر',
      colorId: 1,
    },
    {
      color: 'اللون البرتقالي',
      colorId: 1,
    },
    {
      color: 'اللون الأصفر',
      colorId: 1,
    },
    {
      color: 'اللون الأخضر الفاتح',
      colorId: 1,
    },
    {
      color: 'اللون الاخضر الغامق ',
      colorId: 1,
    },
    {
      color: 'اللون الجنزارى',
      colorId: 1,
    },
    {
      color: 'اللون البنفسجي',
      colorId: 1,
    },
    {
      color: 'اللون الزهري',
      colorId: 1,
    },
    {
      color: 'اللون البني',
      colorId: 1,
    },
    {
      color: ' اللون الأزرق',
      colorId: 1,
    },
    {
      color: 'اللون الرمادي ',
      colorId: 1,
    },
    {
      color: 'اللون الأسود',
      colorId: 1,
    },
  ];
  constructor(private fb: FormBuilder) {}
  ngOnInit() {
    this.roleForm = this.fb.group({
      name: ['', [Validators.required]],
    });
  }
  createRole() {
    console.log(this.roleForm.value, 'ahmed');
  }
}
