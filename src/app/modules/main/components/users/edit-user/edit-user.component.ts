import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { User } from '../../../../../../model/user';
import {
  getBlobFromUrl,

} from '../../../../../../utlities/file-helper';
import { SnackbarService } from '../../../../../services/snackbar.service';
import { SwaggerService } from '../../../../../swagger/swagger.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrl: './edit-user.component.scss',
})
export class EditUserComponent implements OnInit {
  userForm: FormGroup;
  id = +this.route.snapshot.paramMap.get('id');
  isUpdating = false;
  imageUrl: string | null = null;
  showUpdateButton = false; // Control visibility of the button

  constructor(
    private fb: FormBuilder,
    private swagger: SwaggerService,
    private route: ActivatedRoute,
    private snackbar: SnackbarService
  ) {}
  breadcrumbs = [
    {
      label: ' قائمة المستخدمين',
      url: '/main/users',
    },
    {
      label: 'تحرير العضو',
    },
  ];

  ngOnInit() {
    this.getUserData();
  }
  getUserData() {
    this.swagger.getOneUser(this.id).subscribe((user) => {
      this.userForm = this.fb.group({
        name: [user.name, [Validators.required]],
        email: [user.email, [Validators.required, Validators.email]],
        position: [user.position],
        phone: [user.phone],
        mobile: [user.mobile],
        fax: [user.fax],
        email_verified: [user.email_verified],
        group: [user.group],
        image: [],
      });

      this.imageUrl = user.image as string;
    });
  }

  onFileSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length) {
      const file = input.files[0];


      // Update preview
      const reader = new FileReader();
      reader.onload = () => {
        this.imageUrl = reader.result as string;
      };
      reader.readAsDataURL(file);
    }
  }

  async editUser() {
    this.isUpdating = true;
    const image = await getBlobFromUrl(this.imageUrl);

    const user: Partial<User> = {
      name: this.formValue.name,
      email: this.formValue.email,
      position: this.formValue.position,
      phone: this.formValue.phone,
      mobile: this.formValue.mobile,
      fax: this.formValue.fax,
      email_verified: this.formValue.email_verified,
      group: this.formValue.group,
      id: this.id,
      image,
    };

    this.swagger.updateUser(user).subscribe(
      (user) => {
        this.isUpdating = false;
        this.snackbar.showSuccess('تم تعديل المستخدم بنجاح', '/main/users');
      },
      (error) => {
        this.snackbar.showError(error.message);
        this.isUpdating = false;
      }
    );
  }

  get formValue() {
    return this.userForm.value;
  }
}
