import { SnackbarService } from './../../../../../services/snackbar.service';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SwaggerService } from '../../../../../swagger/swagger.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-create-permission',
  templateUrl: './create-permission.component.html',
  styleUrl: './create-permission.component.scss',
})
export class CreatePermissionComponent {
  form: FormGroup;
  isUpdating: boolean = false;
  id = this.route.snapshot.paramMap.get('id');
  breadCrumbs ;
  constructor(
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private swagger: SwaggerService,
    private snackbarService: SnackbarService
  ) {}
  ngOnInit() {
    if (this.id) {
      this.swagger.getOnePermission(this.id).subscribe((res) => {
        this.form = this.fb.group({
          name: [res.name, [Validators.required]],
          description: [res.description, [Validators.required]],
          transformation: [res.transformation || false],
          color:[null]
        });
      });
      this.breadCrumbs = [
        {
          label: 'قائمة الأذونات',
          url: '/main/permissions',
        },
        {
          label: ' تحرير إذن',
        },
      ];
    } else {
      this.form = this.fb.group({
        name: ['', [Validators.required]],
        description: ['', [Validators.required]],
        transformation: [false],
        color:[null]
      });
      this.breadCrumbs = [
        {
          label: 'قائمة الأذونات',
          url: '/main/permissions',
        },
        {
          label: ' انشاء إذن',
        },
      ];
    }
  }
  submit() {
    if (this.id) {
      this.update();
    } else {
      this.create();
    }
  }

  create() {
    this.isUpdating = true;
    const body = {
      ...this.form.value,
      transformation: this.form.value.transformation || false,
      color: 'red'
    };
    this.swagger.createPermission(body).subscribe(
      (res) => {
        this.isUpdating = false;
        this.snackbarService.showSuccess('تم اضافة الإذن', '/main/permissions');
        this.form.reset();
      },
      (error) => {
        this.isUpdating = false;

        this.snackbarService.showError(error.message);
      }
    );
  }

  update() {
    this.isUpdating = true;

    const body = {
      ...this.form.value,
      transformation: this.form.value.transformation || false,
      id: this.id,
    };

    this.swagger.updatePermission(body).subscribe(
      (res) => {
        this.isUpdating = false;

        this.snackbarService.showSuccess('تم تعديل الإذن', '/main/permissions');
      },
      (error) => {
        this.isUpdating = false;
        this.snackbarService.showError(error.message);
      }
    );
  }
}
