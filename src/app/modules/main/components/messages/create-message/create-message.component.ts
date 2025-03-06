import { LiveAnnouncer } from '@angular/cdk/a11y';
import { Component, computed, inject, model, signal } from '@angular/core';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { MatChipInputEvent } from '@angular/material/chips';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
@Component({
  selector: 'app-create-message',
  templateUrl: './create-message.component.html',
  styleUrl: './create-message.component.scss'
})
export class CreateMessageComponent {
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];
  readonly currentMember = model('جميع الأعضاء');
  readonly members = signal(['جميع الأعضاء']);
  readonly allmembers: string[] = ['دزأحمد بن بدر بأبدر', 'عبداللطيف الروقي', 'سعود عبدالله الشمري', 'علي غرم الله الغامدي', 'احمد الهليل'];
  readonly filteredmembers = computed(() => {
    const currentMember = this.currentMember().toLowerCase();
    return currentMember
      ? this.allmembers.filter(Member => Member.toLowerCase().includes(currentMember))
      : this.allmembers.slice();
  });

  readonly announcer = inject(LiveAnnouncer);

  add(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();

    // Add our Member
    if (value) {
      this.members.update(members => [...members, value]);
    }

    // Clear the input value
    this.currentMember.set('');
  }

  remove(Member: string): void {
    this.members.update(members => {
      const index = members.indexOf(Member);
      if (index < 0) {
        return members;
      }

      members.splice(index, 1);
      this.announcer.announce(`Removed ${Member}`);
      return [...members];
    });
  }

  selected(event: MatAutocompleteSelectedEvent): void {
    this.members.update(members => [...members, event.option.viewValue]);
    this.currentMember.set('');
    event.option.deselect();
  }
}
