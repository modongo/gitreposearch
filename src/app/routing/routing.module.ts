import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { GitsearchComponent } from '../components/gitsearch/gitsearch.component';
import { GitrepoComponent } from '../components/gitrepo/gitrepo.component';

const routes: Routes = [
  { path: 'users', component: GitsearchComponent },
  { path: 'repository', component: GitrepoComponent },
  { path: '', redirectTo: '/users', pathMatch: 'full' },

];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  declarations: []
})
export class RoutingModule { }
