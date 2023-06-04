import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { ProjectComponent } from './project/project.component';
import { FunctionalityComponent } from './functionality/functionality.component';
import { TaskComponent } from './task/task.component';
import { FunctionalityDetailsComponent } from './functionality-details/functionality-details.component';
import { FunctionalityUpdateComponent } from './functionality-update/functionality-update.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ProjectComponent,
    FunctionalityComponent,
    TaskComponent,
    FunctionalityDetailsComponent,
    FunctionalityUpdateComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
