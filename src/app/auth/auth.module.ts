import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormComponent } from './components/form/form.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { MaterialModule } from '../material/material.module';
import { SharedModule } from '../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AuthRoutingModule } from './auth-routing.module';



@NgModule({
  declarations: [
    FormComponent,
    LoginPageComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    SharedModule,
    ReactiveFormsModule,
    HttpClientModule,
    AuthRoutingModule
  ]
})
export class AuthModule { }
