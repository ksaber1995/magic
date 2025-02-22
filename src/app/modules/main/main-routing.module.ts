import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContainerComponent } from './components/container/container.component';
import { ListMessagesComponent } from './components/messages/list-messages/list-messages.component';
import { CreateMessageComponent } from './components/messages/create-message/create-message.component';
import { SettingsComponent } from './components/settings/settings.component';

const routes: Routes = [
  {
    path: '',
    component: ContainerComponent,
    children: [
      { path: 'list-messages', component: ListMessagesComponent },
      { path: 'send-messages', component: CreateMessageComponent },
      { path: 'settings', component: SettingsComponent },

      //programs
      { path: 'programs/:id/procedures', component: ListMessagesComponent },
      { path: 'programs/:id/files', component: CreateMessageComponent },
      { path: 'programs/:id/members', component: SettingsComponent },
      { path: 'programs/:id/reports', component: CreateMessageComponent },
      { path: 'programs/:id/supreme-committee-decisions', component: SettingsComponent },

    ],
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainRoutingModule {}
