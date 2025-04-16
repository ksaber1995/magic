import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { SnackbarService } from '../../../../../services/snackbar.service';
import { SwaggerService } from '../../../../../swagger/swagger.service';

@Component({
  selector: 'app-procedures-groups-creation',
  templateUrl: './procedures-groups-creation.component.html',
  styleUrl: './procedures-groups-creation.component.scss'
})
export class ProceduresGroupsCreationComponent {

      isUpdating: boolean;

      form: FormGroup

      id = +this.route.snapshot.paramMap.get('id');
      projectId = +this.route.snapshot.paramMap.get('projectId');
      projectName = this.route.snapshot.paramMap.get('projectName');

      breadCrumbs = []
      constructor(
        private fb: FormBuilder,
        private swagger: SwaggerService,
        private snackbar: SnackbarService,
        private route: ActivatedRoute,
      ) { }

      ngOnInit(): void {
        this.breadCrumbs =  [
          {
            label:'بوابة البرامج',
            url:'/'
          },

          {
            label: this.projectName,
            url: `/main/programs/${this.projectId}/procedures`
          },

          {
            label: 'اضافة قائمة اجراءات جديدة',
          }

        ]
        if(this.id) {
          // if update
        }else{
          this.form = this.fb.group({
            name: [null],
          })
        }

      }

      takeAction(){
        this.createGroup();
      }
      createGroup(){
        this.isUpdating = true;
        const group = {
          project_id: this.projectId,
          name: this.formValue.name,
        }
        this.swagger.createProcedureGroup(group)
        .subscribe(res => {
          this.snackbar.showSuccess('تم اضافة الاجراء', '/main/programs/' + this.projectId + '/procedures');
          this.form.reset();
          this.isUpdating = false;

        }, error => {
          this.snackbar.showError(error.message);
          this.isUpdating = false;
        })
      }

      get formValue() {
        return this.form.value
      }

}
