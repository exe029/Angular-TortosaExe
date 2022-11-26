import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/service/data.service';
import { Students } from 'src/app/interface/students';

@Component({
  selector: 'app-app-students',
  templateUrl: './app-students.component.html',
  styleUrls: ['./app-students.component.scss']
})
export class AppStudentsComponent implements OnInit {

  arrayStudents:Students[]=[];



  constructor( private dataService:DataService) { }

  ngOnInit(): void {

    this.dataService.getStudents().subscribe(
      resp => this.arrayStudents = resp
    );

  }

}
