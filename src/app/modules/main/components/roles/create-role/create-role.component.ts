import { SnackbarService } from './../../../../../services/snackbar.service';
import { Permission } from './../../../../../../model/permission';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SwaggerService } from '../../../../../swagger/swagger.service';
import { Role } from '../../../../../../model/role';
import { ActivatedRoute } from '@angular/router';
import { combineLatest } from 'rxjs';

@Component({
  selector: 'app-create-role',
  templateUrl: './create-role.component.html',
  styleUrl: './create-role.component.scss',
})
export class CreateRoleComponent {
  roleForm: FormGroup;
  id = this.route.snapshot.paramMap.get('id');

  colors = [
    { color: 'اللون الأحمر', value: '#FF0000' }, // Red
    { color: 'اللون البرتقالي', value: '#FFA500' }, // Orange
    { color: 'اللون الأصفر', value: '#FFFF00' }, // Yellow
    { color: 'اللون الأخضر الفاتح', value: '#90EE90' }, // Light Green
    { color: 'اللون الاخضر الغامق ', value: '#008000' }, // Dark Green
    { color: 'اللون الجنزارى', value: '#008B8B' }, // Teal (Dark Cyan)
    { color: 'اللون البنفسجي', value: '#800080' }, // Purple
    { color: 'اللون الزهري', value: '#FFC0CB' }, // Pink
    { color: 'اللون البني', value: '#8B4513' }, // Brown
    { color: ' اللون الأزرق', value: '#0000FF' }, // Blue
    { color: 'اللون الرمادي ', value: '#808080' }, // Gray
    { color: 'اللون الأسود', value: '#000000' }, // Black
  ];

  permissions: Permission[];
  isPermissionsLoaded = false;
  breadcrumbs;
  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private swagger: SwaggerService,
    private snackbar: SnackbarService
  ) {}

  ngOnInit() {
    if (this.id) {
      this.breadcrumbs = [
        {
          label: ' الأذونات',
          url: '/main/roles',
        },
        {
          label: 'تعديل اذن',
        },
      ];
    } else {
      this.breadcrumbs = [
        {
          label: ' الأذونات',
          url: '/main/roles',
        },
        {
          label: 'اضافة اذن جديد',
        },
      ];
    }
    this.roleForm = this.fb.group({
      name: ['', [Validators.required]],
      color: ['', [Validators.required]],
      transformation: [false],
      edit_permission: [false],
      permissions: this.fb.group({}),
    });

    if (this.id) {
      const permissions$ = this.swagger.getAllPermissions();
      const role$ = this.swagger.getOneRole(this.id);
      combineLatest([role$, permissions$]).subscribe(([role, permissions]) => {
        this.roleForm = this.fb.group({
          name: [role.name, [Validators.required]],
          color: [role.color, [Validators.required]],
          transformation: [role.transformation],
          edit_permission: [role.edit_permission],
          permissions: this.fb.group({}),
        });
        this.permissions = permissions.map((res) => ({
          ...res,
          id: res.id + '',
        }));

        this.setPermissionsControl();
        // set old values for permissions
      });
    } else {
      this.swagger.getAllPermissions().subscribe((res) => {
        this.permissions = res.map((res) => ({ ...res, id: res.id + '' }));
        this.setPermissionsControl();
      });
    }
  }

  setPermissionsControl() {
    const permissionsForm = this.roleForm.get('permissions') as FormGroup;

    this.permissions.forEach((res) => {
      permissionsForm.addControl(res.id as string, this.fb.control(false));
    });

    this.isPermissionsLoaded = true;
  }

  createRole() {}

  selectAll() {
    Object.keys(this.permissionsForm.controls).forEach((key) => {
      this.permissionsForm.get(key)?.setValue(true);
    });
  }

  deselectAll() {
    Object.keys(this.permissionsForm.controls).forEach((key) => {
      this.permissionsForm.get(key)?.setValue(false);
    });
  }

  get formValue() {
    return this.roleForm.value;
  }

  create(role: Partial<Role>) {
    this.swagger.createRole(role).subscribe(
      (res) => {
        this.snackbar.showSuccess('تم اضافة الصلاحية', '/main/roles');
        this.roleForm.reset();
      },
      (error) => {
        this.snackbar.showError(error.message);
      }
    );
  }

  update(role: Partial<Role>) {
    role.id = this.id;
    this.swagger.updateRole(role).subscribe(
    
      (res) => {
        debugger
        this.snackbar.showSuccess('تم تعديل الصلاحية', '/main/roles');
      },
      (error) => {
        this.snackbar.showError(error.message);
      }
    );
  }

  submit() {
    const role: Partial<Role> = {
      name: this.formValue.name,
      color: this.formValue.color,
      transformation: this.formValue.transformation || false,
      edit_permission: this.formValue.edit_permission || false,
      permission_ids: this.selectedPermissions,
    };

    if (this.id) {
      this.update(role);
    } else {
      this.create(role);
    }
  }
  get permissionsForm() {
    return this.roleForm.get('permissions') as FormGroup;
  }

  get selectedPermissions(): number[] {
    const permissionsFormValue = this.permissionsForm.value;
    const result = [];
    Object.keys(permissionsFormValue).forEach((id) => {
      if (permissionsFormValue[id]) {
        result.push(id);
      }
    });

    return result;
  }
}
