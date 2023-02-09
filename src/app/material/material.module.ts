import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatLegacyInputModule as MatInputModule} from '@angular/material/legacy-input';
import {MatLegacyCardModule as MatCardModule} from '@angular/material/legacy-card';
import {MatLegacyTooltipModule as MatTooltipModule} from '@angular/material/legacy-tooltip';
import {MatLegacyButtonModule as MatButtonModule} from '@angular/material/legacy-button';
import {MatLegacyFormFieldModule as MatFormFieldModule} from '@angular/material/legacy-form-field';
import {MatLegacyTableModule as MatTableModule} from '@angular/material/legacy-table';
import {MatLegacyPaginatorModule as MatPaginatorModule} from '@angular/material/legacy-paginator';
import {MatLegacyListModule as MatListModule} from '@angular/material/legacy-list';
import {MatIconModule} from '@angular/material/icon';
import { MatLegacyDialogModule as MatDialogModule} from '@angular/material/legacy-dialog';


@NgModule({
  declarations: [],
  exports: [
    CommonModule,
    MatInputModule,
    MatIconModule,
    MatTooltipModule,
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatTableModule,
    MatPaginatorModule,
    MatListModule,
    MatDialogModule,
  ]
})
export class MaterialModule { }
