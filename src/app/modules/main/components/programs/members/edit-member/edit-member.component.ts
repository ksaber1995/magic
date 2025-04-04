import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SwaggerService } from '../../../../../../swagger/swagger.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-member',
  templateUrl: './edit-member.component.html',
  styleUrl: './edit-member.component.scss'
})
export class EditMemberComponent {
memberForm: FormGroup;
id: string
  constructor(
    private fb: FormBuilder,
    private swagger: SwaggerService,
    private route : ActivatedRoute
  ) {}
  ngOnInit() {
    this.memberForm = this.fb.group({
      name: [null, [Validators.required]],
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required]],
      confirmPassword: [null, [Validators.required]],
      position: [null],
      phone: [null],
      mobile: [null],
      fax: [null],
      email_verified: [null],
      block:[null],
      group:[null]
    });
    this.getMemberById()
  }
  getMemberById(){
    this.id = this.route.snapshot.paramMap.get('id');
    this.swagger.getOneMember(this.id).subscribe((res:any)=>{
      this.memberForm.patchValue({
        name: res.data.user.name,
        email: res.data.user.email,
        position:res.data.user.position ,
        phone:res.data.user.phone ,
        mobile: res.data.user.mobile,
        fax: res.data.user.fax,
        email_verified: res.data.user.email_verified ,
        group:res.data.user.group
      })
    })
  }
  editMember() {
    this.swagger.updateUser(this.memberForm.value).subscribe(res=>{
    })
  }
}
