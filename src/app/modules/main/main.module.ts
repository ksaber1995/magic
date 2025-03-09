import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';

import { ContainerComponent } from './components/container/container.component';
import { ContentComponent } from './components/content/content.component';
import { HeaderComponent } from './components/header/header.component';
import { SettingsComponent } from './components/settings/settings.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { MainRoutingModule } from './main-routing.module';
import { CreateMessageComponent } from './components/messages/create-message/create-message.component';
import { ListMessagesComponent } from './components/messages/list-messages/list-messages.component';
import { SharedModule } from '../shared/shared.module';
import { ProceduresComponent } from './components/programs/procedures/procedures.component';
import { FilesComponent } from './components/programs/files/files.component';
import { MembersComponent } from './components/programs/members/members.component';
import { ReportsComponent } from './components/programs/reports/reports.component';
import { SupremeCommitteeDecisionsComponent } from './components/programs/supreme-committee-decisions/supreme-committee-decisions.component';
import { SidebarItemComponent } from './components/sidebar/sidebar-item/sidebar-item.component';
import { ProgramsListComponent } from './components/programs/programs-list/programs-list.component';
import { ProgramItemComponent } from './components/programs/programs-list/program-item/program-item.component';
import { DesicionsListComponent } from './components/supreme-committee/desicions-list/desicions-list.component';
import { CreateDecisionComponent } from './components/supreme-committee/create-decision/create-decision.component';
import { DeleteDialogComponent } from './components/supreme-committee/delete-dialog/delete-dialog.component';
import { DecisionDetailsComponent } from './components/supreme-committee/decision-details/decision-details.component';
import { FormsModule } from '@angular/forms';
import { CommitteeUpdatesListComponent } from './components/latest-committee-updates/committee-updates-list/committee-updates-list.component';
import { CreateNewNewsComponent } from './components/latest-committee-updates/create-new-news/create-new-news.component';
import { NewsDetailsComponent } from './components/latest-committee-updates/news-details/news-details.component';

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
    SupremeCommitteeDecisionsComponent,
    SidebarItemComponent,
    ProgramsListComponent,
    ProgramItemComponent,
    DesicionsListComponent,
    CreateDecisionComponent,
    DeleteDialogComponent,
    DecisionDetailsComponent,
    CommitteeUpdatesListComponent,
    CreateNewNewsComponent,
    NewsDetailsComponent
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
