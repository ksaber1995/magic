import { Component, inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DeleteDialogComponent } from '../delete-dialog/delete-dialog.component';

interface decision {
  name: string,
  date: string, 
  id:string
}


@Component({
  selector: 'app-desicions-list',
  templateUrl: './desicions-list.component.html',
  styleUrl: './desicions-list.component.scss',
})
export class DesicionsListComponent {
  decisionsList : decision[] = [
    {
      name: 'توجيه سمو أمير منطقة الرياض بما يخص المحضر',
      date: '27-01-2021',
      id:'10000'
    },
    {
      name: 'توجيه سمو أمير منطقة الرياض بما يخص المحضر',
      date: '27-01-2021',
      id:'20000'
    },
    {
      name: 'توجيه سمو أمير منطقة الرياض بما يخص المحضر',
      date: '27-01-2021',
      id:'220000'
    },
    {
      name: 'توجيه سمو أمير منطقة الرياض بما يخص المحضر',
      date: '27-01-2021',
      id:'30000'
    },
    {
      name: 'توجيه سمو أمير منطقة الرياض بما يخص المحضر',
      date: '27-01-2021',
      id:'002000'
    },
    {
      name: 'توجيه سمو أمير منطقة الرياض بما يخص المحضر',
      date: '27-01-2021',
      id:'0001200'
    },
    {
      name: 'توجيه سمو أمير منطقة الرياض بما يخص المحضر',
      date: '27-01-2021',
      id:'0000054'
    },
    {
      name: 'توجيه سمو أمير منطقة الرياض بما يخص المحضر',
      date: '27-01-2021',
      id:'00005054'
    },
    {
      name: 'توجيه سمو أمير منطقة الرياض بما يخص المحضر',
      date: '27-01-2021',
      id:'000000'
    },
    {
      name: 'توجيه سمو أمير منطقة الرياض بما يخص المحضر',
      date: '27-01-2021',
      id:'000040'
    },
    {
      name: 'توجيه سمو أمير منطقة الرياض بما يخص المحضر',
      date: '27-01-2021',
      id:'000010'
    },
    {
      name: 'توجيه سمو أمير منطقة الرياض بما يخص المحضر',
      date: '27-01-2021',
      id:'000040'
    },
    {
      name: 'توجيه سمو أمير منطقة الرياض بما يخص المحضر',
      date: '27-01-2021',
      id:'000040'
    },
    {
      name: 'توجيه سمو أمير منطقة الرياض بما يخص المحضر',
      date: '27-01-2021',
      id:'400000'
    },
  ];
  readonly dialog = inject(MatDialog);
  tooltipVisible : string | null = null;
  hideTimeout: any;
  
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


  openDialog() {
    const dialogRef = this.dialog.open(DeleteDialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
