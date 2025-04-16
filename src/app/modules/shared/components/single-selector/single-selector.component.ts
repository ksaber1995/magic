import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'single-selector',
  templateUrl: './single-selector.component.html',
  styleUrl: './single-selector.component.scss'
})
export class SingleSelectorComponent {
  @Input() items: { id: number | string, name: string }[]

  @Input() control: FormControl;

  ngOnInit(): void {
  }


}
