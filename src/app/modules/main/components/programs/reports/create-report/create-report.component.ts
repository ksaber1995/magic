import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-report',
  templateUrl: './create-report.component.html',
  styleUrl: './create-report.component.scss',
})
export class CreateReportComponent implements OnInit {
  imageUrl: string | ArrayBuffer = 'assets/images/image-default.jpg';
  form: FormGroup;
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      title: ['', Validators.required],
      content: ['', Validators.required],
      image: [[], Validators.required],
      files:[[] , Validators.required],
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
}
