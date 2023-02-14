import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validator, Validators } from '@angular/forms';
import { AuthService } from '../../../service/auth.service';
import { Router } from '@angular/router';
import { User } from 'src/app/app-state/entity/user.entity';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { login } from 'src/app/app-state/actions/login.actions';



@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],

})
export class FormComponent implements  OnInit {
  user$: Observable<User>;

  emailControl = new FormControl ('', [Validators.email, Validators.required])
  passwordControl = new FormControl ('',[Validators.minLength(6),Validators.required])

  form = new FormGroup({
    email: this.emailControl,
    password: this.passwordControl,

  })



  constructor( private authService: AuthService, private router: Router, private store:Store<{ user: User}> ) {
    this.user$ = store.select('user');
  }

  login() {
    const data = {
      email: this.form.value.email,
      password: this.form.value.password,
    }
    this.authService.login(data).subscribe( resp => {
      this.authService.setUser(resp.user);
      if( resp.ok ){
        this.store.dispatch(login({user:resp.user}))
        this.router.navigate(['/dashboard'])
      }
    })

  }


  ngOnInit(): void {
  }
}


