import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validator, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../../../service/auth.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],

})
export class FormComponent implements  OnInit {


  emailControl = new FormControl ('', [Validators.email, Validators.required])
  passwordControl = new FormControl ('',[Validators.minLength(6),Validators.required])

  form = new FormGroup({
    email: this.emailControl,
    password: this.passwordControl,

  })



  constructor( private authService: AuthService, private router: Router ) { }

  login() {
    console.log(this.form.value);
    const data = {
      email: this.form.value.email,
      password: this.form.value.password,
    }
    this.authService.login(data).subscribe( resp => {
      console.log(resp);
      this.authService.setUser(resp.user);
      if( resp.ok ){
        this.router.navigate(['/dashboard'])
      }
    })

  }


  ngOnInit(): void {
  }
}


