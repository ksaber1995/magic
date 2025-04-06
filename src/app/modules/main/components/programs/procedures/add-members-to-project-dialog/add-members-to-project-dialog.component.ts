import { SnackbarService } from './../../../../../../services/snackbar.service';
import { Component, Inject, OnInit } from '@angular/core';
import { SwaggerService } from '../../../../../../swagger/swagger.service';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Permission } from '../../../../../../../model/permission';
import { User } from '../../../../../../../model/user';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Member } from '../../../../../../../model/member';

interface DialogData {
  projectId: string;
}
@Component({
  selector: 'app-add-members-to-project-dialog',
  templateUrl: './add-members-to-project-dialog.component.html',
  styleUrl: './add-members-to-project-dialog.component.scss',
})
export class AddMembersToProjectDialogComponent implements OnInit {
  activeTab: 'new' | 'members' | 'groups' = 'groups';
  permissions: Permission[];
  users: User[];
  projectId: string;

  permissionsControl = new FormControl([]);
  membersControl = new FormControl([]);
  isUpdating = false;
  newMemberForm = this.fb.group({
    name: [null, [Validators.required]],
    position: [null, [Validators.required]],
    mobile: [null, [Validators.required]],
    email: [null, [Validators.required]],
  });

  constructor(
    private swagger: SwaggerService,
    private fb: FormBuilder,
    private snackbar: SnackbarService,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) {
    this.projectId = data.projectId;
  }
  ngOnInit() {
    this.swagger.getAllPermissions().subscribe((res) => {
      this.permissions = res;
    });

    this.swagger.getAllUsers(false).subscribe((res) => {
      this.users = res;
    });
  }

  createNewMember() {
    this.isUpdating  = true;

    const newMember: Partial<Member> = this.newMemberForm.value;
    if (newMember && this.newMemberForm.valid) {
      newMember.project_id = +this.projectId;

      this.swagger.createMember(newMember).subscribe((res) => {
        this.snackbar.showSuccessSnackbar('تم اضافة العضو بنجاح');
        this.newMemberForm.reset();
        this.isUpdating  = false;
      }, error=>{
        this.isUpdating  = false;
        this.snackbar.showError(error.message);
      });
    }
  }

  submit() {}
}
