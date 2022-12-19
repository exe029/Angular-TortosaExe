import { Component, OnInit } from '@angular/core';
import { Student } from 'src/app/interface/students';
import { StorageService } from 'src/app/service/storage.service';
import {MatTableDataSource} from '@angular/material/table';

const students = [{
  fname: 'exe',
  lname: 'tortosa',
  subject: 'angular',
  email: 'exe029@hotmail.com',
},
{
  fname: 'lia',
  lname: 'tortosa',

  subject: 'react-js',
  email: '',
},
{
  fname: 'eva',
  lname: 'tortosa',

  subject: 'angular',
  email: 'eva@hotmail.com',
},
{
  fname: 'juan',
  lname: 'tortosa',
  subject: 'JS',
  email: '',
}];

@Component({
  selector: 'app-students-list',
  templateUrl: './students-list.component.html',
  styleUrls: ['./students-list.component.scss'],
})
export class StudentsListComponent implements OnInit {

  displayedColumns: string[] = ['fname', 'email', 'subject'];
  dataSource = students;

  constructor(private storageService:StorageService) {}

  ngOnInit(): void {

    // this.dataSource = new MatTableDataSource<Student>(this.students);

  }
}
