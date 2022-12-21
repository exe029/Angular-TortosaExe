import { Component, Inject, OnInit } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';

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
