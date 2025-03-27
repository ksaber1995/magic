import { SnackbarService } from './../../../../../services/snackbar.service';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SwaggerService } from '../../../../../swagger/swagger.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-create-permission',
  templateUrl: './create-permission.component.html',
  styleUrl: './create-permission.component.scss'
})
export class CreatePermissionComponent {
  form: FormGroup;
  id = this.route.snapshot.paramMap.get('id');

  constructor(
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private swagger: SwaggerService,
    private snackbarService: SnackbarService
  ) {

  }
  ngOnInit() {
    if (this.id) {
      this.swagger.getOnePermission(this.id)
        .subscribe(res => {
          this.form = this.fb.group({
            name: [res.name, [Validators.required]],
            description: [res.description, [Validators.required]],
            transformation: [res.transformation || false],
          })
        })
    } else {
      this.form = this.fb.group({
        name: ['', [Validators.required]],
        description: ['', [Validators.required]],
        transformation: [false],
      })
    }

  }
  submit() {
    if(this.id){
      this.update();
    }else{
      this.create();
    }
  }


  create(){
    const body = { ...this.form.value, transformation: this.form.value.transformation || false }
    this.swagger.createPermission(body)
    .subscribe(res => {
      this.snackbarService.showSuccess('تم اضافة الإذن');
      this.form.reset();
    }, error => {
      this.snackbarService.showError(error.message)
    })
  }

  update(){
    const body = {
      ...this.form.value,
      transformation: this.form.value.transformation || false,
      id: this.id
    }

    this.swagger.updatePermission(body)
    .subscribe(res => {
      this.snackbarService.showSuccess('تم تعديل الإذن');
      this.form.reset();
    }, error => {
      this.snackbarService.showError(error.message)
    })
  }
}
