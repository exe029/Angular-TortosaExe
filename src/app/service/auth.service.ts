import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
export interface Data{
  email: string | null | undefined,
  password: string | null | undefined
}

export interface DataResponse{
  ok:   boolean;
  user: User;
}

export interface User {
  email:    string;
  password: string;
  avatar:   string;
  fname:    string;
  lname:    string;
  id:       string;
}


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user:User;
  isLogin = false;

  constructor( private httpClient: HttpClient, private router:Router){

    if(localStorage.getItem('user')){
      this.isLogin = true;
      this.user = JSON.parse(localStorage.getItem('user')!)
    }
  }

  login(data: Data){
    return this.httpClient.post<DataResponse>(environment.authApi, data)
  }

  logout(){
    localStorage.clear();
    this.router.navigate(['auth']);
  }

  setUser(dataUser: User){
    this.user = dataUser;
    this.isLogin = true;
    localStorage.setItem('user',JSON.stringify(dataUser))
  }


}
