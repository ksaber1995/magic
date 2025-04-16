import { Component, Input } from '@angular/core';
import { Project } from '../../../../../../../model/project';

@Component({
  selector: 'app-procedures-list',
  templateUrl: './procedures-list.component.html',
  styleUrl: './procedures-list.component.scss',
})
export class ProceduresListComponent {
  @Input() inProgressProcedures: any[] = [];
  @Input() completedProcedures: any[] = [];
  @Input() stalledProcedures: any[] = [];
  @Input() project: Project;

  tooltipVisible: string | null = null;
  hideTimeout: any;

  showToolTip(id) {
    this.tooltipVisible = id;
    clearTimeout(this.hideTimeout); // Stop any pending hide action
  }


  startHideTimeout() {
    this.hideTimeout = setTimeout(() => {
      this.tooltipVisible = null;
    }, 100); // Short delay allows smooth transition
  }

  cancelHideTimeout() {
    clearTimeout(this.hideTimeout); // Cancel hide when moving to tooltip
  }
}
