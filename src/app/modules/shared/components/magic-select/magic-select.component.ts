import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'magic-select',
  templateUrl: './magic-select.component.html',
  styleUrl: './magic-select.component.scss'
})
export class MagicSelectComponent {
  @Input() items : {id: number | string, name: string}[]

  @Input() control: FormControl;
}
