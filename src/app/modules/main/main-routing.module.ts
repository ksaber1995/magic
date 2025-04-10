import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContainerComponent } from './components/container/container.component';
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
import { EditMemberComponent } from './components/programs/members/edit-member/edit-member.component';
import { MembersComponent } from './components/programs/members/members.component';
import { CreateProceduresComponent } from './components/programs/procedures/create-procedures/create-procedures.component';
import { ProceduresComponent } from './components/programs/procedures/procedures.component';
import { ProgramFilesComponent } from './components/programs/programs-files/programs-files.component';
import { ProgramsListComponent } from './components/programs/programs-list/programs-list.component';
import { ReportDetailsComponent } from './components/programs/reports/report-details/report-details.component';
import { ReportsComponent } from './components/programs/reports/reports.component';
import { ProjectDecisionsComponent } from './components/project-decisions/project-decisions.component';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';
import { CreateRoleComponent } from './components/roles/create-role/create-role.component';
import { RolesComponent } from './components/roles/roles.component';
import { SettingsComponent } from './components/settings/settings.component';
import { CreateDecisionComponent } from './components/supreme-committee/create-decision/create-decision.component';
import { DecisionDetailsComponent } from './components/supreme-committee/decision-details/decision-details.component';
import { DecisionsListComponent } from './components/supreme-committee/desicions-list/decisions-list.component';
import { CreateUserComponent } from './components/users/create-user/create-user.component';
import { EditUserRolesComponent } from './components/users/edit-user-roles/edit-user-roles.component';
import { EditUserComponent } from './components/users/edit-user/edit-user.component';
import { UserInformationComponent } from './components/users/user-information/user-information.component';
import { UsersListComponent } from './components/users/users-list/users-list.component';
import { UsersSettingsComponent } from './components/users/users-settings/users-settings.component';
import { CreateReportComponent } from './components/programs/reports/create-report/create-report.component';

const routes: Routes = [
  {
    path: '',
    component: ContainerComponent,
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'programs' },

      { path: 'list-messages', component: ListMessagesComponent },
      { path: 'send-messages', component: CreateMessageComponent },
      { path: 'settings', component: SettingsComponent },

      //programs
      { path: 'programs', component: ProgramsListComponent },
      { path: 'programs/create', component: AddProjectComponent },
      { path: 'programs/update/:id', component: AddProjectComponent },
      { path: 'programs/:projectId/procedures', component: ProceduresComponent },
      { path: 'programs/:id/procedures/create', component: CreateProceduresComponent },
      { path: 'programs/:id/files', component: ProgramFilesComponent },
      { path: 'programs/:id/members', component: MembersComponent },
      { path: 'programs/:id/members/:memberId/edit', component: EditMemberComponent },

      { path: 'programs/:projectId/reports', component: ReportsComponent },
      { path: 'programs/:projectId/reports/create', component: CreateReportComponent },
      { path: 'programs/:projectId/reports/:reportId/edit', component: CreateReportComponent },
      { path: 'programs/:projectId/reports/:reportId', component: ReportDetailsComponent },

      { path: 'programs/:id/supreme-committee-decisions', component: ProjectDecisionsComponent },
      // supereme-committee
      { path: 'decisions', component: DecisionsListComponent },
      { path: 'decisions/:projectId', component: DecisionsListComponent },
      { path: 'decision-details/:id', component: DecisionDetailsComponent },
      { path: 'new-decision', component: CreateDecisionComponent },
      { path: 'new-decision/:id', component: CreateDecisionComponent },

      //latest-committee-updates
      {path:'committee-updates-list' , component:CommitteeUpdatesListComponent},
      {path:'committee-updates-list/:id' , component:NewsDetailsComponent},
      {path:'committee-updates-list/:projectId' , component:CommitteeUpdatesListComponent},
      {path:'create-new-news' , component:CreateNewNewsComponent},
      {path:'update-post/:id' , component:CreateNewNewsComponent},

      {path:'committee-updates-list/:id/delete' , component:DeleteNewsPageComponent},

      // permissions
      {path:'permissions' , component: PermissionsListComponent},
      {path:'new-permission' , component: CreatePermissionComponent},
      {path:'permissions/:id' , component:CreatePermissionComponent},

      //roles
      {path:'roles', component:RolesComponent},
      {path:'create-role', component:CreateRoleComponent},
      {path:'update-role/:id', component:CreateRoleComponent},

      //users
      {path:'users', component:UsersListComponent},
      {path:'users/:id', component:UserInformationComponent},
      {path:'users/:email/reset-password', component:ResetPasswordComponent},
      {path:'users/:id/edit', component:EditUserComponent},
      {path:'users/:id/edit-roles', component:EditUserRolesComponent},
      {path:'users/:id/files', component:ProgramFilesComponent},
      {path:'create-user', component:CreateUserComponent},
      {path:'users-setting', component:UsersSettingsComponent},
      {path:'users/:id/delete' , component:DeleteNewsPageComponent},

      //meetings
      {path:'meetings', component:MeetingsListComponent},
      {path:'create-meeting', component:CreateMeetingComponent},
      {path:'update-meeting/:id', component:CreateMeetingComponent},

    ],
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainRoutingModule { }
