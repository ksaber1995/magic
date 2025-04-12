import { Component, OnInit } from '@angular/core';
import { SwaggerService } from '../../../../../swagger/swagger.service';
import { Project } from '../../../../../../model/project';
import { SnackbarService } from '../../../../../services/snackbar.service';
import { MatDialog } from '@angular/material/dialog';
import { viewType } from './program-item/program-item.component';

@Component({
  selector: 'app-programs-list',
  templateUrl: './programs-list.component.html',
  styleUrl: './programs-list.component.scss',
})
export class ProgramsListComponent implements OnInit {
  breadCrumbs = [
    {
      label: 'بوابة البرامج',
      url: '/',
    },
    {
      label: 'البرامج',
    },
  ];
  projects: Project[] = [];

  breadCrumbButton = {
    label: 'اضافة برنامج',
    url: '/main/programs/create',
  };
  viewMode: viewType = 1;  // undefined
  viewEnum = viewType
  constructor(
    private swagger: SwaggerService,
    private snackbar: SnackbarService,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.swagger.getAllProjects().subscribe((res) => {
      this.projects = res;
    });
  }

  deleteProject(id: number) {
    this.swagger.deleteProject(id).subscribe(
      (res) => {
        this.snackbar.showSuccessSnackbar('تم حذف البرنامج بنجاح');
        const index = this.projects.findIndex((res) => res.id === id);
        this.projects.splice(index, 1);
      },
      (error) => {
        this.snackbar.showError(error.message);
      }
    );
  }
  switchView(viewMode){
    this.viewMode = viewMode
  }
}
