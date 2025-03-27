import {
  Component,
  ElementRef,
  OnInit,
  ViewChild
} from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Meeting } from '../../../../../../model/meeting';
import { SwaggerService } from '../../../../../swagger/swagger.service';
import { SnackbarService } from './../../../../../services/snackbar.service';
function formatDate(date: Date): string {
  const year = date.getFullYear();
  const month = date.getMonth() + 1; // Months are 0-based, so add 1
  const day = date.getDate();

  return `${year}-${month}-${day}`;
}

// TODO Ahmed, validation, style add files
@Component({
  selector: 'app-create-meeting',
  templateUrl: './create-meeting.component.html',
  styleUrl: './create-meeting.component.scss',
})
export class CreateMeetingComponent implements OnInit{
  @ViewChild('dateInput') dateInput!: ElementRef;

  users$ = this.swagger.getAllUsers();
  projects$ = this.swagger.getAllProjects();

  progressValue = 0;
  form: FormGroup;
  times = [5,10,15,20,25,30,35,40,45,50,55,60]
  selectedFiles: File[] = [];

  constructor(
    private fb: FormBuilder,
    private swagger: SwaggerService,
    private snackbar: SnackbarService
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      title: [],
      content: [],
      meeting_address: [],
      members_ids: [[]],
      projects_ids: [[]],
      meeting_date: [],
      meeting_time: [],
      reminder_time: [0] // no reminder
    });

  }

  setTodayDate() {
    this.form
      .get('date')
      .setValue(new Date().toISOString().split('T')[0]);
  }


  createMeeting() {
    const meeting_time = `${this.formValue.meeting_time.getHours()}:${this.formValue.meeting_time.getMinutes().toString().padStart(2, '0')}`;

    const meeting: Meeting = {
      title: this.formValue.title,
      content: this.formValue.content,
      meeting_address:this.formValue.meeting_address,
      meeting_date: formatDate(this.formValue.meeting_date as Date),
      meeting_time,
      reminder_time: this.formValue.reminder_time,
      members_ids: this.formValue.members_ids,
      projects_ids: this.formValue.projects_ids,
      files: this.selectedFiles
    };

    this.swagger.createMeeting(meeting).subscribe(res=>{
      this.snackbar.showSuccess('تم اضافة الاجتماع بنجاح');
      this.form.reset();
    },error=>{
      this.snackbar.showError(error.message)
    })

    console.log(this.form.value);
  }


  onFileSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files) {
      this.selectedFiles = Array.from(input.files); // Store selected files
    }
  }

  get formValue(){
    return this.form.value;
  }
}
