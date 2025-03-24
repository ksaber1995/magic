import { SnackbarService } from './../../../../services/snackbar.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SwaggerService } from '../../../../swagger/swagger.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrl: './settings.component.scss'
})
export class SettingsComponent implements OnInit {
  settingForm: FormGroup
  loaded = false;
  updating = false;
  canUpdate = false;
  error: string;

  constructor(
    private fb: FormBuilder,
    private swagger: SwaggerService,
    private snackbar: SnackbarService
  ) {

  }
  //TODO, Ahmed Add Validator Here
  //TODO, Ahmed make disable button obvious when it is disabled
  //TODO, invalid buttons colors

  ngOnInit() {
    this.swagger.getSetting()
      .subscribe(settings => {
        this.settingForm = this.fb.group({
          site_name: [settings.site_name, [Validators.required]],
          email: [settings.email, [Validators.required]],
          email_status: [settings.email_status],
          sms_status: [settings.sms_status],
        })

        this.loaded = true;


        this.settingForm.valueChanges.subscribe(() => {
          this.canUpdate = true;
        })
      });

  }

  updataSite() {
    this.swagger.updateSetting(this.settingForm.value).subscribe(() => {
      this.canUpdate = true;
      this.updating = false;
      this.snackbar.showSuccess('تم تغيير الاعدادات بنجاح');

    }, error => {
      this.error = error.message
    });
  }
}
