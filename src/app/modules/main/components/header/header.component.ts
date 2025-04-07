import { Component, inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { TechnicalSupportComponent } from './technical-support/technical-support.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  dialog = inject(MatDialog);
    openTechnicalSupport(){
    this.dialog.open(TechnicalSupportComponent);
    }

}
