import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { AppRoutingModule } from '../app-routing.module';
import { PageNotfoundComponent } from './page-notfound/page-notfound.component';



@NgModule({
  declarations: [
    PageNotfoundComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    AppRoutingModule
  ],
  exports: [
  ],
})
export class SharedModule { }
