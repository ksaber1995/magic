import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { getBlobFromUrl } from '../../../../../../../utlities/file-helper';
import { SnackbarService } from '../../../../../../services/snackbar.service';
import { SwaggerService } from '../../../../../../swagger/swagger.service';
import { FileItem } from '../../../../../../../model/filte';

//TODO: add breadCrumb
@Component({
  selector: 'app-create-report',
  templateUrl: './create-report.component.html',
  styleUrl: './create-report.component.scss',
})
export class CreateReportComponent implements OnInit {
  imageUrl: string | ArrayBuffer = 'assets/images/image-default.jpg';
  form: FormGroup;
  reportId = +this.route.snapshot.paramMap.get('reportId');
  projectId = +this.route.snapshot.paramMap.get('projectId');
  isUpdating = false;
  oldFiles: FileItem[];

  constructor(
    private fb: FormBuilder,
    private snackbar: SnackbarService,
    private swagger: SwaggerService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    if (this.reportId) {
      this.swagger.getOneReport(this.reportId).subscribe((res) => {
        this.form = this.fb.group({
          project_id: [this.projectId],
          title: [res.title, Validators.required],
          status_id: [res.status_id],
          content: [res.content, Validators.required],
          image: [[]],
          files: [[]],
        });
        this.imageUrl = res.image as string;
        this.oldFiles = (res.files as FileItem[])
      });
    } else {
    }
    this.form = this.fb.group({
      project_id: [this.projectId],
      title: ['', Validators.required],
      status_id: [1],
      content: ['', Validators.required],
      image: [[], Validators.required],
      files: [[], Validators.required],
    });
  }

  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;

    if (input.files && input.files.length > 0) {
      const file = input.files[0];
      const reader = new FileReader();

      this.form.get('image')?.setValue(file);

      reader.onload = () => {
        this.imageUrl = reader.result;
      };

      reader.readAsDataURL(file); // Convert to base64 image URL
    }
  }

  get filesControl() {
    return this.form.get('files') as FormControl;
  }

  takeAction() {
    this.isUpdating = true;
    if (this.reportId) {
      this.updateReport();
    } else {
      this.createReport();
    }
  }

  createReport() {
    this.swagger.createReport(this.form.value).subscribe(
      (res) => {
        this.isUpdating = false;
        this.snackbar.showSuccess(
          'تم اضافة التقرير بنجاح',
          `/main/programs/${this.projectId}/reports`
        );
      },
      (error) => {
        this.isUpdating = false;
        this.snackbar.showError(error.message);
      }
    );
  }
  async updateReport() {
    const body = this.form.value;
    body.id = this.reportId;
    body.image = await getBlobFromUrl(this.imageUrl as string);

    this.swagger.updateReport(body).subscribe(
      (res) => {
        this.isUpdating = false;
        this.snackbar.showSuccess(
          'تم تعديل التقرير بنجاح',
          `/main/programs/${this.projectId}/reports`
        );
      },
      (error) => {
        this.isUpdating = false;
        this.snackbar.showError(error.message);
      }
    );
  }
}
