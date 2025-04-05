import { Component, inject, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Decision } from '../../../../../../model/decision';
import { SwaggerService } from '../../../../../swagger/swagger.service';
import { DeleteDialogComponent } from '../delete-dialog/delete-dialog.component';
import { SnackbarService } from '../../../../../services/snackbar.service';

@Component({
  selector: 'app-decisions-list',
  templateUrl: './decisions-list.component.html',
  styleUrl: './decisions-list.component.scss',
})
export class DecisionsListComponent  {
  @Input() decisions : Decision[];
  @Input() showMoreButton: boolean = false ;

  readonly dialog = inject(MatDialog);
  tooltipVisible: string | null = null;
  hideTimeout: any;

  breadcrumbs = [
    {
      label:'بوابة البرامج',
      url:'/'
    },
    {
      label:'قرارات اللجنة العليا'
    }
  ]

  constructor(
    private swagger: SwaggerService,
    private snackbar: SnackbarService,
  ) {}


  showToolTip(decisionId) {
    this.tooltipVisible = decisionId;
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

  delete(id: number) {
    const dialogRef = this.dialog.open(DeleteDialogComponent);

    dialogRef.afterClosed().subscribe((res) => {
      if (res) {
        this.swagger.deleteDecision(id).subscribe(
          (res) => {
            this.snackbar.showSuccessSnackbar('تم حذف القرار');
            const index = this.decisions.findIndex((res) => res.id === id);
            this.decisions.splice(index, 1);
          },
          (error) => {
            this.snackbar.showError(error.message);
          }
        );
      }
    });
  }
}
