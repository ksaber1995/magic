import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '' , pathMatch: 'full', redirectTo: 'main'},

  {path: 'login' , loadChildren: () => import('../app/modules/auth/auth.module').then(res=> res.AuthModule) },
  {path: 'main' , loadChildren: () => import('../app/modules/main/main.module').then(res=> res.MainModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
