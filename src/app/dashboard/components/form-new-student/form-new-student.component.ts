import { Component, OnInit, Input, AfterViewInit } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FirebaseService } from 'src/app/service/firebase.service';
import { Observable } from 'rxjs';
import { Student } from 'src/app/interface/students';
import { DialogData } from '../students-dialog/students-dialog.component';
@Component({
  selector: 'app-form-new-student',
  templateUrl: './form-new-student.component.html',
  styleUrls: ['./form-new-student.component.scss'],
})
export class FormNewStudentComponent implements OnInit, AfterViewInit {
  @Input() data:DialogData = {
    student:{
      email:'',
      fname:'',
      lname:'',
      subject:'',
      password:''
    },
    type:'create'
  };
  students$: Observable<Student[]>;

  newStudentForm: FormGroup = this.formBuilder.group({
    fname: ['', [Validators.required]],
    lname: ['', [Validators.required]],
    subject: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    password: [
      '',
      [Validators.required, Validators.minLength(6), Validators.maxLength(12)],
    ],
    password2: [
      '',
      [Validators.required, Validators.minLength(6), Validators.maxLength(12)],
    ],
  });

  constructor(
    private formBuilder: FormBuilder,
    private firebaseService: FirebaseService
  ) {}

  ngOnInit(): void {

    console.log(this.data)
    if(this.data.type === 'edit'){
      console.log(this.data, 'here')
      // this.newStudentForm.get('fname')?.setValue(this.data.student.fname);
      // this.newStudentForm.value.fname.setValue(this.data.student.fname)
      // this.newStudentForm.get('lname')?.setValue(this.data.student.lname);
      // this.newStudentForm.get('email')?.setValue(this.data.student.email);
      // this.newStudentForm.get('subject')?.setValue(this.data.student.subject);
      // this.newStudentForm.get('password')?.setValue(this.data.student.password);
      // this.newStudentForm.get('password2')?.setValue(this.data.student.password);
    }

  }

  ngAfterViewInit(): void {
  }

  async onSubmit() {
    const { fname, lname, subject, email, password } = this.newStudentForm.value;
    const newStudent = {
      fname,
      lname,
      subject,
      email,
      password,
    };

    try {
      if (!this.newStudentForm.invalid) {
        const response = await this.firebaseService.createDoc('students', newStudent);
        this.firebaseService.updateData();
        console.log(response);
      }

    } catch (error) {
      console.error(error);
    }
  }
}
