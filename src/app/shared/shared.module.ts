import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { PageNotfoundComponent } from './page-notfound/page-notfound.component';



@NgModule({
  declarations: [
    PageNotfoundComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,

  ],
  exports: [
  ],
})
export class SharedModule { }
