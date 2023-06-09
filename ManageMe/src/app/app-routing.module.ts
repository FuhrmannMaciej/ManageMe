import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ProjectComponent } from './project/project.component';
import { FunctionalityComponent } from './functionality/functionality.component';
import { TaskComponent } from './task/task.component';
import { FunctionalityDetailsComponent } from './functionality-details/functionality-details.component';
import { FunctionalityUpdateComponent } from './functionality-update/functionality-update.component';
import { FunctionalityCreateComponent } from './functionality-create/functionality-create.component';
import { TaskCreateComponent } from './task-create/task-create.component';
import { TaskDetailsComponent } from './task-details/task-details.component';
import { TaskUpdateComponent } from './task-update/task-update.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'project', component: ProjectComponent },
  { path: 'project/:projectId/functionality', component: FunctionalityComponent },
  { path: 'project/:projectId/task', component: TaskComponent },
  { path: 'project/:projectId/task/create', component: TaskCreateComponent },
  { path: 'project/:projectId/task/:taskId', component: TaskDetailsComponent },
  { path: 'project/:projectId/task/:taskId/update', component: TaskUpdateComponent },
  { path: 'project/:projectId/functionality/create', component: FunctionalityCreateComponent },
  { path: 'project/:projectId/functionality/:functionalityId', component: FunctionalityDetailsComponent },
  { path: 'project/:projectId/functionality/:functionalityId/update', component: FunctionalityUpdateComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
