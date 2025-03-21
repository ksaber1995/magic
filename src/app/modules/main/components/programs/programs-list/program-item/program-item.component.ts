import { Component, Input } from '@angular/core';
import { Project } from '../../../../../../../model/project';

@Component({
  selector: 'app-program-item',
  templateUrl: './program-item.component.html',
  styleUrl: './program-item.component.scss'
})
export class ProgramItemComponent {
  @Input() project: Project;
}
