import { Component, OnInit, Input } from '@angular/core';
import { Students } from 'src/app/interface/students';

@Component({
  selector: 'app-card-students',
  templateUrl: './card-students.component.html',
  styleUrls: ['./card-students.component.scss']
})
export class CardStudentsComponent implements OnInit {

  @Input() student:Students={
    fname:'',
    lname:'',
    curso:'',
    mail:'',



  }


  constructor() { }

  ngOnInit(): void {
  }

}
