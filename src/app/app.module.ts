import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppNavbarComponent } from './shared/app-navbar/app-navbar.component';
import { AppToolbarComponent } from './pages/app-toolbar/app-toolbar.component';
import { CardStudentsComponent } from './components/card-students/card-students.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormComponent } from './pages/form/form.component';
import { MaterialModule } from './material/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormNewStudentComponent } from './components/form-new-student/form-new-student.component';
import { StudentsListComponent } from './components/students-list/students-list.component';


@NgModule({
  declarations: [
    AppComponent,
    AppToolbarComponent,
    AppNavbarComponent,
    CardStudentsComponent,
    FormComponent,
    FormNewStudentComponent,
    StudentsListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    MaterialModule,
    BrowserAnimationsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
