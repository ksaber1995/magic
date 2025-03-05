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

    ],
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainRoutingModule { }
