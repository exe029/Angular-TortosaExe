import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppNavbarComponent } from './app-navbar/app-navbar.component';
import { MaterialModule } from '../material/material.module';
import { RouterLink } from '@angular/router';
import { AppRoutingModule } from '../app-routing.module';
import { FooterComponent } from './footer/footer.component';



@NgModule({
  declarations: [
    AppNavbarComponent,
    FooterComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    AppRoutingModule
  ],
  exports: [
    AppNavbarComponent,
    FooterComponent
  ],
})
export class SharedModule { }
