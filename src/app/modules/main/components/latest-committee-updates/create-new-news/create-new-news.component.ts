import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { CreateSuccessDialogComponent } from '../../../../shared/components/create-succss-dialog/create-succss-dialog.component';
import { SwaggerService } from '../../../../../swagger/swagger.service';
import { map } from 'rxjs';
import { SnackbarService } from '../../../../../services/snackbar.service';
import { ActivatedRoute } from '@angular/router';
import { updateFilesFromUrls } from '../../../../../../utlities/file-helper';

@Component({
  selector: 'app-create-new-news',
  templateUrl: './create-new-news.component.html',
  styleUrl: './create-new-news.component.scss',
})
export class CreateNewNewsComponent implements OnInit {
  newsForm: FormGroup;
  dialog = inject(MatDialog);
  projects$ = this.swagger
    .getAllProjects()
    .pipe(
      map((allProjects) =>
        allProjects.map((res) => ({ name: res.title, id: res.id }))
      )
    );
  id = +this.route.snapshot.paramMap.get('id');

  breadcrumbs = [
    {
      label: 'البرامج',
      url: '/',
    },
    {
      label: ' قائمة أخر مستجدات اللجنة ',
      url: '/main/committee-updates-list',
    },
    {
      label: 'انشاء خبر',
    },
  ];
  isUpdating = false;
  constructor(
    private fb: FormBuilder,
    private swagger: SwaggerService,
    private snackbar: SnackbarService,
    private route: ActivatedRoute
  ) {}
  get formValue() {
    return this.newsForm.value;
  }
  ngOnInit(): void {
    if (this.id) {
      this.swagger.getOnePost(this.id).subscribe((res) => {
        debugger
        this.newsForm = this.fb.group({
          title: [res.title , [Validators.required]],
          project_id: [res.project.id ],
          image: [res.image , [Validators.required]],
          content: [res.content , [Validators.required]],
          files: [[]],
        });

        updateFilesFromUrls(res.files.map(res=> res.url), this.filesControl);

      })


    } else {
      this.newsForm = this.fb.group({
        title: [null , [Validators.required]],
        project_id: [null ],
        image: [null , [Validators.required]],
        content: [null, [Validators.required]],
        files: [[]],
      });
    }
  }
  createNews() {
    this.isUpdating = true;
    debugger
    const news = {
      project_id: this.formValue.project_id,
      title: this.formValue.title,
      image: this.formValue.image,
      content: this.formValue.content,
      files: this.formValue.files,
      id: null,
    };

    this.swagger.createPost(news).subscribe(
      (res) => {
        this.isUpdating = false;
        this.newsForm.reset();
        this.snackbar.showSuccess(
          'تم انشاء الخبر بنجاح',
          '/main/committee-updates-list'
        );
      },
      (error) => {
        this.isUpdating = false;
        this.snackbar.showError(error.message);
      }
    );
  }

  updateNews() {
    this.isUpdating = true;

    const news = {
      project_id: this.formValue.project_id,
      title: this.formValue.title,
      image: this.formValue.image,
      content: this.formValue.content,
      files: this.formValue.files,
      id: this.id,
    };

    this.swagger.updatePost(news).subscribe(
      (res) => {
        this.isUpdating = false;
        this.newsForm.reset();
        this.snackbar.showSuccess(
          'تم انشاء الخبر بنجاح',
          '/main/committee-updates-list'
        );
      },
      (error) => {
        this.isUpdating = false;
        this.snackbar.showError(error.message);
      }
    );
  }

  takeAction(){
    if (this.id) {
      this.updateNews();
    } else {
      this.createNews();
    }
  }
  onFileSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files) {
      const filesArray = Array.from(input.files);

      this.newsForm.get('image').setValue(filesArray[0]);
    }
  }

  get filesControl() {
    return this.newsForm.get('files') as FormControl;
  }

}
