import { Component, Inject, OnInit } from '@angular/core';
import {MatLegacyDialog as MatDialog, MAT_LEGACY_DIALOG_DATA as MAT_DIALOG_DATA, MatLegacyDialogRef as MatDialogRef} from '@angular/material/legacy-dialog';

@Component({
  selector: 'app-students-dialog',
  templateUrl: './students-dialog.component.html',
  styleUrls: ['./students-dialog.component.scss']
})
export class StudentsDialogComponent implements OnInit {

  constructor( @Inject(MAT_DIALOG_DATA) public data: Element | null,) {
    console.log(data)
   }

  ngOnInit(): void {
  }

}
