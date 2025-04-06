import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Member } from '../../../../../../../model/member';
import { Role } from '../../../../../../../model/role';
import { User } from '../../../../../../../model/user';
import { SwaggerService } from '../../../../../../swagger/swagger.service';
import { SnackbarService } from './../../../../../../services/snackbar.service';

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
  roles: Role[];
  users: User[];
  projectId: string;

  rolesControl = new FormControl([]);
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
    this.swagger.getAllRoles(false).subscribe((res) => {
      this.roles = res;
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

  addRoles(){
    const selectedRoles = this.rolesControl.value;

    console.log(selectedRoles)
  }

  addMembers() {
    const selectedMembers = this.membersControl.value;
    console.log(selectedMembers)

  }
}
