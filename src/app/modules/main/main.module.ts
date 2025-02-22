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

@NgModule({
  declarations: [
    ContainerComponent,
         SidebarComponent,
         ContentComponent,
         HeaderComponent,
         SettingsComponent,
         CreateMessageComponent,
         ListMessagesComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    MatSidenavModule
  ]
})
export class MainModule { }
