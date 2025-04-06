import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'magic-select',
  templateUrl: './magic-select.component.html',
  styleUrl: './magic-select.component.scss'
})
export class MagicSelectComponent implements OnInit{
  @Input() items : {id: number | string, name: string}[]

  @Input() control: FormControl;
  @Input() magicLabel: string;
  @Input() magicValue: string ;

  ngOnInit(): void {
    this.control.valueChanges.subscribe(selectedValues => {
      if(!this.magicValue) return
      if (selectedValues.includes(this.magicValue)) {
        // Only keep 'all_members'
        this.control.setValue([this.magicValue], { emitEvent: false });
      }
    });
  }

  isDisabledOption(value: string): boolean {
    if (this.magicValue) {

      const selected = this.control.value || [];
      return selected.includes(this.magicValue) && value !== this.magicValue;
    }

    return false;
  }
}
