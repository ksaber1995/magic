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
    SupremeCommitteeDecisionsComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    MatSidenavModule,
    SharedModule,
  ]
})

export class MainModule { }
