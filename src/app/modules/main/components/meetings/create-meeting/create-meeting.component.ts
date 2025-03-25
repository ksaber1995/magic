import {
  Component,
  ElementRef,
  HostListener,
  OnInit,
  ViewChild
} from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { SwaggerService } from '../../../../../swagger/swagger.service';
import { Meeting } from '../../../../../../model/metting';

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

  constructor(
    private fb: FormBuilder,
    private swagger: SwaggerService
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      title: [],
      content: [],
      meeting_address: [],
      members_ids: [[]],
      projects_ids: [[]],
      files: [[]],
      meeting_date: [],
      meeting_time: [],
      reminder_time: []
    });
  }

  setTodayDate() {
    this.form
      .get('date')
      .setValue(new Date().toISOString().split('T')[0]);
  }

  setTime(){
    // this.meetingForm
    // .get('time')
    // .setValue('12:00 am');

  }

  createMeeting() {
    const meeting: Meeting = {
      title: this.formValue.title,
      content: this.formValue.content,
      meeting_address:this.formValue.meeting_address,
      meeting_date: this.formValue.meeting_date,
      meeting_time: this.formValue.meeting_time,
      reminder_time: this.formValue.reminder_time,
      members_ids: this.formValue.members_ids,
      projects_ids: this.formValue.projects_ids,
      files: this.formValue.files
    };

    this.swagger.createMeeting(meeting).subscribe(res=>{
      console.log(res)
    })

    console.log(this.form.value);
  }

  members: string[] = [
    'جميع الاعضاء...',
    'دزأحمد بن بدر بأبدر',
    'عبداللطيف الروقي',
    'سعود عبدالله الشمري',
    'علي غرم الله الغامدي',
    'احمد الهليل',
  ];

  committees: string[] = [
    'جميع المجموعات...',
    'admin',
    'اللجنة الفنية',
    'اللجنة العليا',
    'لجنة متابعة التقارير',
    'مشرفين البرامج',
  ];

  programs: string[] = [
    'مراقبة الانبعاثات من محطات توليد الكهرباء',
    'مراقبة الانبعاثات من محطات توليد الكهرباء',
  ];

  selectedCommittee: string[] = ['جميع المجموعات...'];
  selectedMember: string[] = ['جميع الاعضاء...'];
  selectedProgram: string[] = ['جميع البرامج...'];

  isCommitteeDropdownOpen = false;
  isMemberDropdownOpen = false;
  isProgramDropdownOpen = false;


  closeAllDropdowns() {
    this.isCommitteeDropdownOpen = false;
    this.isMemberDropdownOpen = false;
    this.isProgramDropdownOpen = false;
  }

  @HostListener('document:click', ['$event'])
  closeDropdown(event: Event) {
    if (!(event.target as HTMLElement).closest('.dropdown-container')) {
      this.closeAllDropdowns();
    }
  }

  get formValue(){
    return this.form.value;
  }
}
