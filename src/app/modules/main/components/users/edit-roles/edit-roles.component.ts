import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-roles',
  templateUrl: './edit-roles.component.html',
  styleUrl: './edit-roles.component.scss'
})
export class EditRolesComponent {
  rolesForm: FormGroup;
    constructor(private fb: FormBuilder) {}
    ngOnInit() {
      this.rolesForm = this.fb.group({
        admin: [null],
        technicalCommittee: [null],
        supremeCommittee: [null],
        reportsFollowUpCommittee: [null],
        programSupervisors: [null],
      });
    }
    editRoles(){
      
    }
}
