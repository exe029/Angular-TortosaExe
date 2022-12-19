import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {


  constructor(){
    if(!localStorage.getItem('students')){
      console.log('en el constructor');
      localStorage.setItem('students','nijehiufefhbie');
    }
  }




}
