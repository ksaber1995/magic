import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-procedures-list',
  templateUrl: './procedures-list.component.html',
  styleUrl: './procedures-list.component.scss',
})
export class ProceduresListComponent {
  @Input() inProgressProcedures: any[] = [];
  @Input() completedProcedures: any[] = [];
  @Input() stalledProcedures: any[] = [];
  @Input() projectId: number;
}
