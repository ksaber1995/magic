import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';

import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { ContainerComponent } from './components/container/container.component';
import { ContentComponent } from './components/content/content.component';
import { HeaderComponent } from './components/header/header.component';
import { CommitteeUpdatesListComponent } from './components/latest-committee-updates/committee-updates-list/committee-updates-list.component';
import { CreateNewNewsComponent } from './components/latest-committee-updates/create-new-news/create-new-news.component';
import { DeleteNewsPageComponent } from './components/latest-committee-updates/delete-news-page/delete-news-page.component';
import { NewsDetailsComponent } from './components/latest-committee-updates/news-details/news-details.component';
import { CreateMeetingComponent } from './components/meetings/create-meeting/create-meeting.component';
import { MeetingsListComponent } from './components/meetings/meetings-list/meetings-list.component';
import { CreateMessageComponent } from './components/messages/create-message/create-message.component';
import { ListMessagesComponent } from './components/messages/list-messages/list-messages.component';
import { CreatePermissionComponent } from './components/permissions-list/create-permission/create-permission.component';
import { PermissionsListComponent } from './components/permissions-list/permissions-list.component';
import { AddProjectComponent } from './components/programs/add-project/add-project.component';
import { FilesComponent } from './components/programs/files/files.component';
import { EditMemberComponent } from './components/programs/members/edit-member/edit-member.component';
import { MembersComponent } from './components/programs/members/members.component';
import { ChangeStatusRequestComponent } from './components/programs/procedures/change-status-request/change-status-request.component';
import { CreateProceduresComponent } from './components/programs/procedures/create-procedures/create-procedures.component';
import { ProceduresListComponent } from './components/programs/procedures/procedures-list/procedures-list.component';
import { ProceduresComponent } from './components/programs/procedures/procedures.component';
import { ProgramItemComponent } from './components/programs/programs-list/program-item/program-item.component';
import { ProgramsListComponent } from './components/programs/programs-list/programs-list.component';
import { CreateReportComponent } from './components/programs/reports/create-report/create-report.component';
import { EditReportComponent } from './components/programs/reports/edit-report/edit-report.component';
import { ReportDetailsComponent } from './components/programs/reports/report-details/report-details.component';
import { ReportsComponent } from './components/programs/reports/reports.component';
import { ProjectDecisionsComponent } from './components/project-decisions/project-decisions.component';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';
import { CreateRoleComponent } from './components/roles/create-role/create-role.component';
import { RolesComponent } from './components/roles/roles.component';
import { SettingsComponent } from './components/settings/settings.component';
import { SidebarItemComponent } from './components/sidebar/sidebar-item/sidebar-item.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { CreateDecisionComponent } from './components/supreme-committee/create-decision/create-decision.component';
import { DecisionDetailsComponent } from './components/supreme-committee/decision-details/decision-details.component';
import { DeleteDialogComponent } from './components/supreme-committee/delete-dialog/delete-dialog.component';
import { DecisionsListComponent } from './components/supreme-committee/desicions-list/decisions-list.component';
import { CreateUserComponent } from './components/users/create-user/create-user.component';
import { EditUserRolesComponent } from './components/users/edit-user-roles/edit-user-roles.component';
import { EditUserComponent } from './components/users/edit-user/edit-user.component';
import { FileDetailsComponent } from './components/users/file-details/file-details.component';
import { UserFilesComponent } from './components/users/user-files/user-files.component';
import { UserInformationComponent } from './components/users/user-information/user-information.component';
import { UsersListComponent } from './components/users/users-list/users-list.component';
import { UsersSettingsComponent } from './components/users/users-settings/users-settings.component';
import { MainRoutingModule } from './main-routing.module';

@NgModule({
  declarations: [
    ContainerComponent,
    SidebarComponent,
    ContentComponent,
    HeaderComponent,
    SettingsComponent,
    CreateMessageComponent,
    ListMessagesComponent,
    ProceduresComponent,
    FilesComponent,
    MembersComponent,
    ReportsComponent,
    SidebarItemComponent,
    ProgramsListComponent,
    ProgramItemComponent,
    DecisionsListComponent,
    CreateDecisionComponent,
    DeleteDialogComponent,
    DecisionDetailsComponent,
    CommitteeUpdatesListComponent,
    CreateNewNewsComponent,
    NewsDetailsComponent,
    DeleteNewsPageComponent,
    PermissionsListComponent,
    CreatePermissionComponent,
    RolesComponent,
    CreateRoleComponent,
    UsersListComponent,
    CreateUserComponent,
    UsersSettingsComponent,
    UserInformationComponent,
    UserFilesComponent,
    FileDetailsComponent,
    EditUserComponent,
    MeetingsListComponent,
    CreateMeetingComponent,
    ReportDetailsComponent,
    EditReportComponent,
    EditMemberComponent,
    ChangeStatusRequestComponent,
    CreateReportComponent,
    ProjectDecisionsComponent,
    CreateProceduresComponent,
    EditUserRolesComponent,
    ResetPasswordComponent,
    ProceduresListComponent,
    AddProjectComponent,
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    MatSidenavModule,
    SharedModule,
    FormsModule
  ]
})

export class MainModule { }
