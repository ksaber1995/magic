import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { FileItem } from '../../../../../../model/filte';
import { Meeting } from '../../../../../../model/meeting';
import { SwaggerService } from '../../../../../swagger/swagger.service';
import { SnackbarService } from './../../../../../services/snackbar.service';
function formatDate(date: Date): string {
  if (date instanceof Date) {
    const year = date.getFullYear();
    const month = date.getMonth() + 1; // Months are 0-based, so add 1
    const day = date.getDate();

    return `${year}-${month}-${day}`;
  } else {
    return date;
  }
}

// TODO, validation, style add files
@Component({
  selector: 'app-create-meeting',
  templateUrl: './create-meeting.component.html',
  styleUrl: './create-meeting.component.scss',
})
export class CreateMeetingComponent implements OnInit {
  @ViewChild('dateInput') dateInput!: ElementRef;

  users$ = this.swagger.getAllUsers();
  projects$ = this.swagger.getAllProjects();
  breadCrumbs;
  form: FormGroup;
  times = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60];
  isUpdating = false;
  id = +this.route.snapshot.paramMap.get('id');
  oldFiles: FileItem[];
  constructor(
    private fb: FormBuilder,
    private swagger: SwaggerService,
    private snackbar: SnackbarService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    if (this.id) {
      this.breadCrumbs = [
        {
          label: 'الاجتماعات',
          url: '/main/meetings',
        },
        {
          label: 'تعديل اجتماع ',
        },
      ];

      this.swagger.getOneMeeting(this.id).subscribe((res) => {
        const meeting_time = new Date();
        const times = res.meeting_time.split(':');
        meeting_time.setHours(+times[0], +times[1], +times[2]); // Set to 10:30 AM

        this.form = this.fb.group({
          title: [res.title],
          content: [res.content],
          meeting_address: [res.meeting_address],
          members_ids: [res.members.map((res) => res.id)],
          projects_ids: [res.projects.map((res) => res.id)],
          meeting_date: [new Date(res.meeting_date)],
          meeting_time: [meeting_time],
          files: [[]],
          reminder_time: [res.reminder_time],
        });
        this.oldFiles = (res.files as FileItem[])
      });
    } else {
      this.breadCrumbs = [
        {
          label: 'الاجتماعات',
          url: '/main/meetings',
        },
        {
          label: 'اضافة اجتماع جديد',
        },
      ];
      this.form = this.fb.group({
        title: [],
        content: [],
        meeting_address: [],
        members_ids: [[]],
        projects_ids: [[]],
        meeting_date: [],
        meeting_time: [],
        files: [[]],
        reminder_time: [0], // no reminder
      });
    }
  }

  setTodayDate() {
    this.form.get('date').setValue(new Date().toISOString().split('T')[0]);
  }

  updateMeeting(meeting: Partial<Meeting>) {
    meeting.id = this.id;
    this.swagger.updateMeeting(meeting).subscribe(
      (res) => {
        this.snackbar.showSuccess('تم تعديل الاجتماع بنجاح', '/main/meetings');
        this.form.reset();
        this.isUpdating = false;
      },
      (error) => {
        this.snackbar.showError(error.message);
        this.isUpdating = false;
      }
    );
  }

  createMeeting(meeting: Meeting) {
    this.swagger.createMeeting(meeting).subscribe(
      (res) => {
        this.snackbar.showSuccess('تم اضافة الاجتماع بنجاح', '/main/meetings');
        this.form.reset();
        this.isUpdating = false;
      },
      (error) => {
        this.snackbar.showError(error.message);
        this.isUpdating = false;
      }
    );
  }

  submit() {
    this.isUpdating = true;
    const meeting_time = `${this.formValue.meeting_time.getHours()}:${this.formValue.meeting_time
      .getMinutes()
      .toString()
      .padStart(2, '0')}`;

    const meeting: Meeting = {
      title: this.formValue.title,
      content: this.formValue.content,
      meeting_address: this.formValue.meeting_address,
      meeting_date: formatDate(this.formValue.meeting_date as Date),
      meeting_time,
      reminder_time: this.formValue.reminder_time,
      members_ids: this.formValue.members_ids,
      projects_ids: this.formValue.projects_ids,
      files: this.formValue.files,
    };

    if (this.id) {
      this.updateMeeting(meeting);
    } else {
      this.createMeeting(meeting);
    }
  }

  get formValue() {
    return this.form?.value;
  }

  get filesControl() {
    return this.form?.get('files') as FormControl;
  }
}
