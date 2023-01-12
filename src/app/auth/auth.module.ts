import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './pages/login/login.component';
import { FormComponent } from '../pages/form/form.component';
import { AppModule } from '../app.module';



@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    AppModule
  ]
})
export class AuthModule { }
