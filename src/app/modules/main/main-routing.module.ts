import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContainerComponent } from './components/container/container.component';
import { ListMessagesComponent } from './components/messages/list-messages/list-messages.component';
import { CreateMessageComponent } from './components/messages/create-message/create-message.component';
import { SettingsComponent } from './components/settings/settings.component';
import { ProceduresComponent } from './components/programs/procedures/procedures.component';
import { FilesComponent } from './components/programs/files/files.component';
import { MembersComponent } from './components/programs/members/members.component';
import { ReportsComponent } from './components/programs/reports/reports.component';
import { SupremeCommitteeDecisionsComponent } from './components/programs/supreme-committee-decisions/supreme-committee-decisions.component';
import { ProgramsListComponent } from './components/programs/programs-list/programs-list.component';
import { DesicionsListComponent } from './components/supreme-committee/desicions-list/desicions-list.component';
import { CreateDecisionComponent } from './components/supreme-committee/create-decision/create-decision.component';
import { DecisionDetailsComponent } from './components/supreme-committee/decision-details/decision-details.component';
import { CommitteeUpdatesListComponent } from './components/latest-committee-updates/committee-updates-list/committee-updates-list.component';
import { NewsDetailsComponent } from './components/latest-committee-updates/news-details/news-details.component';
import { CreateNewNewsComponent } from './components/latest-committee-updates/create-new-news/create-new-news.component';
import { DeleteNewsPageComponent } from './components/latest-committee-updates/delete-news-page/delete-news-page.component';
import { PermissionsListComponent } from './components/permissions-list/permissions-list.component';
import { CreatePermissionComponent } from './components/permissions-list/create-permission/create-permission.component';
import { RolesComponent } from './components/roles/roles.component';
import { CreateRoleComponent } from './components/roles/create-role/create-role.component';
import { UsersListComponent } from './components/users/users-list/users-list.component';
import { CreateUserComponent } from './components/users/create-user/create-user.component';
import { UsersSettingsComponent } from './components/users/users-settings/users-settings.component';
import { UserInformationComponent } from './components/users/user-information/user-information.component';
import { UserFilesComponent } from './components/users/user-files/user-files.component';
import { EditUserComponent } from './components/users/edit-user/edit-user.component';
import { EditRolesComponent } from './components/users/edit-roles/edit-roles.component';
import { CreateMeetingComponent } from './components/meetings/create-meeting/create-meeting.component';
import { MeetingsListComponent } from './components/meetings/meetings-list/meetings-list.component';

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
      { path: 'programs/:id/procedures', component: ProceduresComponent },
      { path: 'programs/:id/files', component: FilesComponent },
      { path: 'programs/:id/members', component: MembersComponent },
      { path: 'programs/:id/reports', component: ReportsComponent },
      { path: 'programs/:id/supreme-committee-decisions', component: SupremeCommitteeDecisionsComponent },
      // supereme-committee
      { path: 'list-decisions', component: DesicionsListComponent },
      { path: 'list-decisions/:id', component: DecisionDetailsComponent },
      { path: 'new-decision', component: CreateDecisionComponent },
      //latest-committee-updates
      {path:'committee-updates-list' , component:CommitteeUpdatesListComponent},
      {path:'committee-updates-list/:id' , component:NewsDetailsComponent},
      {path:'create-new-news' , component:CreateNewNewsComponent},
      {path:'committee-updates-list/:id/delete' , component:DeleteNewsPageComponent},

      // permissions
      {path:'permissions-list' , component: PermissionsListComponent},
      {path:'new-permission' , component: CreatePermissionComponent},
      {path:'permissions-list/:id/delete' , component:DeleteNewsPageComponent},
 
      //roles 
      {path:'roles', component:RolesComponent}, 
      {path:'create-role', component:CreateRoleComponent},
      
      //users 
      {path:'users', component:UsersListComponent}, 
      {path:'users/:id', component:UserInformationComponent}, 
      {path:'users/:id/edit', component:EditUserComponent}, 
      {path:'users/:id/edit-roles', component:EditRolesComponent}, 
      {path:'users/:id/files', component:UserFilesComponent}, 
      {path:'create-user', component:CreateUserComponent}, 
      {path:'users-setting', component:UsersSettingsComponent}, 
      {path:'users/:id/delete' , component:DeleteNewsPageComponent},

      //meetings 
      {path:'meetings', component:MeetingsListComponent}, 
      {path:'create-meeting', component:CreateMeetingComponent},
  
    ],
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainRoutingModule { }
