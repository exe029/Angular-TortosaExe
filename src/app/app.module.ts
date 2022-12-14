import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppToolbarComponent } from './pages/app-toolbar/app-toolbar.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormComponent } from './pages/form/form.component';
import { MaterialModule } from './material/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormNewStudentComponent } from './components/form-new-student/form-new-student.component';
import { StudentsListComponent } from './components/students-list/students-list.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideDatabase,getDatabase } from '@angular/fire/database';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { provideStorage,getStorage } from '@angular/fire/storage';
import { StudentsDialogComponent } from './components/students-dialog/students-dialog.component';

import { CursosCardComponent } from './components/cursos-card/cursos-card.component';
import { CursoslistComponent } from './pages/cursoslist/cursoslist.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { SharedModule } from './shared/shared.module';




@NgModule({
  declarations: [
    AppComponent,
    AppToolbarComponent,
    FormComponent,
    FormNewStudentComponent,
    StudentsListComponent,
    StudentsDialogComponent,
    CursosCardComponent,
    CursoslistComponent,
    HomeComponent,


  ],
  imports: [
    SharedModule,
    AppRoutingModule,
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    MaterialModule,
    BrowserAnimationsModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideDatabase(() => getDatabase()),
    provideFirestore(() => getFirestore()),
    provideStorage(() => getStorage()),

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
