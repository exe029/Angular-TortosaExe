import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppToolbarComponent } from './components/app-toolbar/app-toolbar.component';
import { FormComponent } from './pages/form/form.component';
import { FormNewStudentComponent } from './components/form-new-student/form-new-student.component';
import { StudentsListComponent } from './components/students-list/students-list.component';
import { StudentsDialogComponent } from './components/students-dialog/students-dialog.component';
import { CursosCardComponent } from './components/cursos-card/cursos-card.component';
import { CursoslistComponent } from './pages/cursoslist/cursoslist.component';
import { HomeComponent } from './pages/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { AppNavbarComponent } from './components/app-navbar/app-navbar.component';
import { MaterialModule } from '../material/material.module';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import {  HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    AppToolbarComponent,
    FooterComponent,
    AppNavbarComponent,
    FormComponent,
    FormNewStudentComponent,
    StudentsListComponent,
    StudentsDialogComponent,
    CursosCardComponent,
    CursoslistComponent,
    HomeComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    DashboardRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
  ]
})
export class DashboardModule { }
