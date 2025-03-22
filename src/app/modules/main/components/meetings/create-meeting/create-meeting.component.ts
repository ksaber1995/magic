import { LiveAnnouncer } from '@angular/cdk/a11y';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import {
  Component,
  computed,
  ElementRef,
  HostListener,
  inject,
  model,
  signal,
  ViewChild,
} from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { MatChipInputEvent } from '@angular/material/chips';

@Component({
  selector: 'app-create-meeting',
  templateUrl: './create-meeting.component.html',
  styleUrl: './create-meeting.component.scss',
})
export class CreateMeetingComponent {
  @ViewChild('dateInput') dateInput!: ElementRef;

  progressValue: number = 0;
  meetingForm: FormGroup;
  constructor(private fb: FormBuilder) {}
  ngOnInit(): void {
    this.meetingForm = this.fb.group({
      program: [null],
      address: [null],
      descrpitioon: [null],
      uploadedFiles: this.fb.array([]),
      progressPercent: [null],
      status: [null],
      date: [null],
    });
  }

  setTodayDate() {
    this.meetingForm
      .get('date')
      .setValue(new Date().toISOString().split('T')[0]);
  }
  createmeeting() {
    console.log(this.meetingForm.value);
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

  toggleDropdown(type: 'committee' | 'member' | 'program', event: Event) {
    event.stopPropagation();
    this.isCommitteeDropdownOpen =
      type === 'committee' ? !this.isCommitteeDropdownOpen : false;
    this.isMemberDropdownOpen =
      type === 'member' ? !this.isMemberDropdownOpen : false;
    this.isProgramDropdownOpen =
      type === 'program' ? !this.isProgramDropdownOpen : false;
  }

  selectItem(
    type: 'committee' | 'member' | 'program',
    option: string,
    event: Event
  ) {
    event.stopPropagation();
    const selectedList =
      type === 'committee'
        ? this.selectedCommittee
        : type === 'member'
        ? this.selectedMember
        : this.selectedProgram;

    if (!selectedList.includes(option)) {
      selectedList.push(option);
    }

    this.closeAllDropdowns();
  }

  removeItem(
    type: 'committee' | 'member' | 'program',
    option: string,
    event: Event
  ) {
    event.stopPropagation();
    if (type === 'committee') {
      this.selectedCommittee = this.selectedCommittee.filter(
        (item) => item !== option
      );
    } else if (type === 'member') {
      this.selectedMember = this.selectedMember.filter(
        (item) => item !== option
      );
    } else {
      this.selectedProgram = this.selectedProgram.filter(
        (item) => item !== option
      );
    }
  }

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
}
