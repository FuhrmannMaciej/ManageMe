import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ProjectComponent } from './project/project.component';
import { FunctionalityComponent } from './functionality/functionality.component';
import { TaskComponent } from './task/task.component';
import { FunctionalityDetailsComponent } from './functionality-details/functionality-details.component';


const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'project', component: ProjectComponent },
  { path: 'project/:projectId/functionality', component: FunctionalityComponent },
  { path: 'project/:projectId/functionality/:functionalityId', component: FunctionalityDetailsComponent },
  { path: 'project/:projectId/functionality/:functionalityId/task', component: TaskComponent },
  { path: 'project/:projectId/functionality/:functionalityId/task/:taskId', component: TaskComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
