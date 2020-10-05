import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {UserComponent} from './/user/user.component';
import {RepoComponent} from './repo/repo.component';

const routes: Routes = [
  {path: 'user', component: UserComponent},
  {path: 'repo', component: RepoComponent},
  {path: '', redirectTo: '/user', pathMatch: 'full'},

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
