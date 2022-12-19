import { Component, OnInit, Input } from '@angular/core';
import { Student } from 'src/app/interface/students';

@Component({
  selector: 'app-card-students',
  templateUrl: './card-students.component.html',
  styleUrls: ['./card-students.component.scss']
})
export class CardStudentsComponent implements OnInit {

  @Input() student:Student={
    fname:'',
    lname:'',
    subject:'',
    email:'',



  }


  constructor() { }

  ngOnInit(): void {
  }

}
