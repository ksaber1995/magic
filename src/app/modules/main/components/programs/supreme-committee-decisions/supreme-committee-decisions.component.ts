import { Component } from '@angular/core';
interface decision {
  name: string;
  date: string;
  id: string;
}
@Component({
  selector: 'app-supreme-committee-decisions',
  templateUrl: './supreme-committee-decisions.component.html',
  styleUrl: './supreme-committee-decisions.component.scss'
})
export class SupremeCommitteeDecisionsComponent {
  decisionsList: decision[] = [
    {
      name: 'توجيه سمو أمير منطقة الرياض بما يخص المحضر',
      date: '27-01-2021',
      id: '10000',
    },

    {
      name: 'توجيه سمو أمير منطقة الرياض بما يخص المحضر',
      date: '27-01-2021',
      id: '000040',
    },
    {
      name: 'توجيه سمو أمير منطقة الرياض بما يخص المحضر',
      date: '27-01-2021',
      id: '000010',
    },
    {
      name: 'توجيه سمو أمير منطقة الرياض بما يخص المحضر',
      date: '27-01-2021',
      id: '000040',
    },
    {
      name: 'توجيه سمو أمير منطقة الرياض بما يخص المحضر',
      date: '27-01-2021',
      id: '000040',
    },
    {
      name: 'توجيه سمو أمير منطقة الرياض بما يخص المحضر',
      date: '27-01-2021',
      id: '400000',
    },
  ];
}
