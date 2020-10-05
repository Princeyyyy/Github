import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {UserComponent} from './/user/user.component';
import {RepoComponent} from './repo/repo.component';
import {SearchComponent} from "./search/search.component";

const routes: Routes = [
  {path: 'user-list', component: UserComponent},
  {path: 'repo-list', component: RepoComponent},
  {path: 'search-list', component: SearchComponent},
  {path: '', redirectTo: '/repo', pathMatch: 'full'},

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
