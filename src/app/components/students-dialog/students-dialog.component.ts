import { Component, Inject, OnInit } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import { DataService } from 'src/app/service/data.service';
import { Student } from '../../interface/students';



@Component({
  selector: 'app-students-dialog',
  templateUrl: './students-dialog.component.html',
  styleUrls: ['./students-dialog.component.scss']
})
export class StudentsDialogComponent implements OnInit {

  constructor( @Inject(MAT_DIALOG_DATA) public data: Element | null,) {
    console.log(data)
    // if (data){
    //}
   }

  ngOnInit(): void {
  }

}
