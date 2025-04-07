import { Component, inject, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import {
  ApexChart,
  ApexDataLabels,
  ApexFill,
  ApexLegend,
  ApexNonAxisChartSeries,
  ApexResponsive,
  ChartComponent,
} from 'ng-apexcharts';
import { combineLatest, map } from 'rxjs';
import { Decision } from '../../../../../../model/decision';
import { FileItem } from '../../../../../../model/filte';
import { Post } from '../../../../../../model/post';
import { Procedure } from '../../../../../../model/procedure';
import { Project, ProjectHistory } from '../../../../../../model/project';
import { SwaggerService } from '../../../../../swagger/swagger.service';
import { AddMembersToProjectDialogComponent } from './add-members-to-project-dialog/add-members-to-project-dialog.component';
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
  projectId: string;
  project: Project;
  hideTimeout: any;
  dialog = inject(MatDialog);
  histories: ProjectHistory[] = [];

  decisions: Decision[] = [];
  posts: Post[] = [];

  stalledProcedures: Procedure[] = [];
  completedProcedures: Procedure[] = [];
  inProgressProcedures: Procedure[] = [];

  constructor(private swagger: SwaggerService, private route: ActivatedRoute) {
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

  files: FileItem[] = [];

  ngOnInit() {


    this.projectId = this.route.snapshot.paramMap.get('id');
    console.log(this.projectId);


    this.getData();
    this.getProject();
  }

  getData() {
    const decisions$ = this.swagger
      .getAllDecisions()
      .pipe(
        map((res) => res.filter((res) => res.project?.id == +this.projectId))
      );

     const posts$ = this.swagger
      .getAllPosts()
      .pipe(
        map((res) => res.filter((res) => res.project?.id == +this.projectId))
      );

      const procedures$ = this.swagger.getProcedureByProjectId(+this.projectId);
      const history$ = this.swagger.getProjectHistory(+this.projectId);

      combineLatest([decisions$, posts$, procedures$, history$]).subscribe(([decisions, posts, procedures, history]) => {
        this.decisions = decisions;
        this.posts = posts;
        this.histories = history;
        this.stalledProcedures = procedures.filter(
          (res) => +res.progress_percentage <= 0
        );
        this.inProgressProcedures = procedures.filter(
          (res) => +res.progress_percentage > 0 && +res.progress_percentage < 100
        );
        this.completedProcedures = procedures.filter(
          (res) => +res.progress_percentage >= 100
        );

        const decisionsFiles  = this.decisions.map((res) => res.files as FileItem[])?.flat();
        const postsFiles = this.posts.map((res) => res.files as FileItem[]).flat();
        const proceduresFiles = procedures.map((res) => res.files as FileItem[]).flat();

        this.files = [...decisionsFiles, ...postsFiles, ...proceduresFiles].map(res=> ({...res, size: res.size / 1024, fileType: res.name.split('.').pop()}));
        console.log({ files: this.files})
      })

  }
  getProject(){
    this.swagger.getOneProject(this.projectId).subscribe((res) => {
      this.project = res;
    });
  }

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
        checkbox.checked = false;
      });
  }

  openAddMemberModal(){
    const dialogRef = this.dialog.open(AddMembersToProjectDialogComponent, {
      data: {
        projectId: this.projectId
      }
    });

    dialogRef.afterClosed().subscribe(res=>{
      this.getProject();
    })
  }
}
