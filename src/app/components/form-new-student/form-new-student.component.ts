import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FirebaseService } from 'src/app/service/firebase.service';

@Component({
  selector: 'app-form-new-student',
  templateUrl: './form-new-student.component.html',
  styleUrls: ['./form-new-student.component.scss'],
})
export class FormNewStudentComponent implements OnInit {
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

  ngOnInit(): void {}

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
