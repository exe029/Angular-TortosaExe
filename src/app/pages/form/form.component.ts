import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validator, Validators } from '@angular/forms';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],

})
export class FormComponent implements  OnInit {


  emailControl = new FormControl ('', [Validators.email, Validators.required])
  passwordControl = new FormControl ('',[Validators.minLength(8),Validators.required])

  form = new FormGroup({
    email: this.emailControl,
    password: this.passwordControl,

  })



  constructor() { }

  login() {
    console.log(this.form.value)
  }


  ngOnInit(): void {
  }
}


