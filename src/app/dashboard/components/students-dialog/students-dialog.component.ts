import { Component, Inject, OnInit } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import { Student } from 'src/app/interface/students';

export interface DialogData {
  data: Student;
  type: string;
}
@Component({
  selector: 'app-students-dialog',
  templateUrl: './students-dialog.component.html',
  styleUrls: ['./students-dialog.component.scss']
})
export class StudentsDialogComponent implements OnInit {

  constructor( @Inject(MAT_DIALOG_DATA) public data: DialogData) {
   }

  ngOnInit(): void {

  }

}
