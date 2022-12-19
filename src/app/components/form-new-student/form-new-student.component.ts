import { Component, OnInit } from '@angular/core';

import {
  FormBuilder,
  FormGroup,
  Validators,
} from "@angular/forms";

@Component({
  selector: 'app-form-new-student',
  templateUrl: './form-new-student.component.html',
  styleUrls: ['./form-new-student.component.scss']
})
export class FormNewStudentComponent implements OnInit {

  newStudentForm: FormGroup = this.formBuilder.group({

    fname:['',[ Validators.required ]],
    lname:['',[ Validators.required ]],
    curso:['',[ Validators.required ]],
    email:['',[ Validators.required, Validators.email ]],
    password:['',[ Validators.required, Validators.minLength(6), Validators.maxLength(12) ]],
    password2:['',[ Validators.required, Validators.minLength(6), Validators.maxLength(12) ]],

  });

  constructor( private formBuilder:FormBuilder ){}

  ngOnInit(): void {
  }


  onSubmit(){
    console.log(this.newStudentForm);
  }

}
