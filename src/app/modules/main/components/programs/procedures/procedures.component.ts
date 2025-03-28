import { Component, inject, OnInit, ViewChild } from '@angular/core';
import { SwaggerService } from '../../../../../swagger/swagger.service';
import { ChartComponent } from 'ng-apexcharts';
import {
  ApexChart,
  ApexLegend,
  ApexDataLabels,
  ApexFill,
  ApexNonAxisChartSeries,
  ApexResponsive,
  ApexOptions,
} from 'ng-apexcharts';
import { MatDialog } from '@angular/material/dialog';
import { ChangeStatusRequestComponent } from './change-status-request/change-status-request.component';

export type ChartOptions = {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  labels: string[];
  fill: ApexFill;
  dataLabels: ApexDataLabels;
  legend: ApexLegend;
  responsive: ApexResponsive[];
  colors: string[];
};
@Component({
  selector: 'app-procedures',
  templateUrl: './procedures.component.html',
  styleUrl: './procedures.component.scss',
})
export class ProceduresComponent implements OnInit {
  @ViewChild('chart') chart: ChartComponent;
  public desicionChartOptions: Partial<ChartOptions>;
  public proceduresChartOptions: Partial<ChartOptions>;
  tooltipVisible: string | null = null;
  hideTimeout: any;
  dialog = inject(MatDialog);
  lastUpdates = [
    {
      date: 'March 24, 2025, 6:46 AM',
      reportName: 'ahmed alkhairy',
      reportId: '101',
      userName: 'admin',
      userImage: 'assets/images/user-image.jpg',
      userId: '545',
    },
    {
      date: 'March 24, 2025, 6:46 AM',
      reportName: 'ahmed alkhairy',
      reportId: '101',
      userName: 'admin',
      userImage: 'assets/images/user-image.jpg',
      userId: '545',
    },
    {
      date: 'March 24, 2025, 6:46 AM',
      reportName: 'ahmed alkhairy',
      reportId: '101',
      userName: 'admin',
      userImage: 'assets/images/user-image.jpg',
      userId: '545',
    },
  ];
  decisionsList = [
    {
      project_id: '545',
      title: 'asdsdsadsad ',
      content: '',
      progress_percentage: 10,
      status_id: '15643',
      date: '2021-01-26',
      id: '121',
    },
    {
      project_id: '545',
      title: 'asdsdsadsad ',
      content: '',
      progress_percentage: 10,
      status_id: '15643',
      date: '2021-01-26',
      id: '121',
    },
    {
      project_id: '545',
      title: 'asdsdsadsad ',
      content: '',
      progress_percentage: 10,
      status_id: '15643',
      date: '2021-01-26',
      id: '121',
    },
  ];

  proceduresList = [
    {
      name: 'تطبيق إجراءات الحد من الانبعاثات ووضع برنامج زمني لتنفيذه ',
      percent: 10,
      comments: 4,
      userImage: 'assets/images/user-image.jpg',
      id: '555',
    },
    {
      name: 'تطبيق إجراءات الحد من الانبعاثات ووضع برنامج زمني لتنفيذه ',
      percent: 10,
      comments: 4,
      userImage: 'assets/images/user-image.jpg',
      id: '555',
    },
    {
      name: 'تطبيق إجراءات الحد من الانبعاثات ووضع برنامج زمني لتنفيذه ',
      percent: 10,
      comments: 4,
      userImage: 'assets/images/user-image.jpg',
      id: '555',
    },
    {
      name: 'تطبيق إجراءات الحد من الانبعاثات ووضع برنامج زمني لتنفيذه ',
      percent: 10,
      comments: 4,
      userImage: 'assets/images/user-image.jpg',
      id: '555',
    },
  ];

  constructor() {
    this.desicionChartOptions = {
      series: [44, 55, 41],
      labels: ['منجز', 'متعثر', 'قيد التنفيذ'],
      chart: {
        width: 150,
        type: 'donut',
      },
      colors: ['#858585', '#33FF57', '#3357FF'], // Custom colors
      dataLabels: {
        enabled: false,
      },
      fill: {
        type: 'solid',
      },

      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 180,
            },
            legend: {
              position: 'bottom',
            },
          },
        },
      ],
    };

    this.proceduresChartOptions = {
      series: [10, 100, 50],
      labels: ['منجز', 'متعثر', 'قيد التنفيذ'],
      chart: {
        width: 150,
        type: 'donut',
      },
      colors: ['#858585', '#33FF57', '#3357FF'], // Custom colors
      dataLabels: {
        enabled: false,
      },
      fill: {
        type: 'solid',
      },

      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 180,
            },
            legend: {
              position: 'bottom',
            },
          },
        },
      ],
    };
  }

  files = [
    {
      title: 'M 0',
      date: '2017-12-04',
      fileType: 'pdf',
      name: 'pdf1',
    },

    {
      title: 'M 0',
      date: '2017-12-04',
      fileType: 'pdf',
      name: 'pdf1',
    },
    {
      title: 'M 0',
      date: '2017-12-04',
      fileType: 'pdf',
      name: 'pdf1',
    },
  ];
  committeeList = [
    {
      imagePath: 'assets/images/user-image.jpg', 
      name:'سعادة الأستاذ', 
      date:'2021-01-29 14:45:53',
      id:'151'
    }, 
    {
      imagePath: 'assets/images/user-image.jpg', 
      name:'سعادة الأستاذ', 
      date:'2021-01-29 14:45:53',
      id:'151'
    }, 
    {
      imagePath: 'assets/images/user-image.jpg', 
      name:'سعادة الأستاذ', 
      date:'2021-01-29 14:45:53',
      id:'151'
    }
  ]

  members = [
    {
      memberName: 'admin',
      memberImage: 'assets/images/user-image.jpg',
      memberId: '545',
    },
    {
      memberName: 'admin',
      memberImage: 'assets/images/user-image.jpg',
      memberId: '545',
    },
    {
      memberName: 'admin',
      memberImage: 'assets/images/user-image.jpg',
      memberId: '545',
    },
    {
      memberName: 'admin',
      memberImage: 'assets/images/user-image.jpg',
      memberId: '545',
    },
    {
      memberName: 'admin',
      memberImage: 'assets/images/user-image.jpg',
      memberId: '545',
    },
    
  ]
  ngOnInit() {}

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

  changeProceduresStatus(checkbox: HTMLInputElement) {
    this.dialog
      .open(ChangeStatusRequestComponent)
      .afterClosed()
      .subscribe(() => {
        checkbox.checked = false; // Reset checkbox when dialog closes
      });
  }
}
