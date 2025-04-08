import { SnackbarService } from './../../../../../services/snackbar.service';
import { SwaggerService } from './../../../../../swagger/swagger.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Project } from '../../../../../../model/project';

@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrl: './add-project.component.scss'
})
export class AddProjectComponent implements OnInit{
  form: FormGroup ;
  id = +this.route.snapshot.paramMap.get('id');

  constructor(
    private fb: FormBuilder,
    private swagger: SwaggerService,
    private route: ActivatedRoute,
    private snackbar: SnackbarService
  ){}

  breadCrumbs = [
    {
      label: ' قائمة البرامج',
      url: '/',
    },
    {
      label: ' اضافة برنامج',
    },
  ];

  imageUrl: string | ArrayBuffer = 'assets/images/image-default.jpg';
  isUpdating = false;
  ngOnInit(): void {
    if(this.id){
      this.swagger.getOneProject(this.id).subscribe(res=>{
        this.form = this.fb.group({
          title: [res.title, Validators.required],
          content: [res.content, Validators.required],
          image: [res.image, Validators.required],
        })

        this.imageUrl = res.image;

      });
    }else{
      this.form = this.fb.group({
        title: ['', Validators.required],
        content: ['', Validators.required],
        image: [[], Validators.required],
      })
    }
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

  takeAction(): void {
    if(this.id){
      this.updateProject();
    } else {
      this.createProject();
    }
  }

  createProject(){
    this.isUpdating = true;
    const project : Partial<Project> = {
      title: this.form.value.title,
      content: this.form.value.content,
      image: this.form.value.image,
      status_id : 1

    }

    this.swagger.createProject(project).subscribe(res=>{
      this.isUpdating = false;
      this.snackbar.showSuccess('تم اضافة البرنامج بنجاح' , '/');
    }, error=>{
      this.isUpdating = false;
      this.snackbar.showError(error.message)
    });
  }

  updateProject(){
    this.isUpdating = true;
    const project : Partial<Project> = {
      id: this.id,
      title: this.form.value.title,
      content: this.form.value.content,
      image: this.form.value.image,
      status_id : 1
    }

    this.swagger.updateProject(project).subscribe(res=>{
      this.isUpdating = false;
      this.snackbar.showSuccess('تم تعديل البرنامج بنجاح' , '/');
    }, error=>{
      this.isUpdating = false;
      this.snackbar.showError(error.message)
    });
  }
}
