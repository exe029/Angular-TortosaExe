import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Students } from '../interface/students';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  url = 'https://run.mocky.io/v3/b6318786-af58-4157-a296-09173ffb7131';

  constructor( private httpClient:HttpClient) {}

    getStudents(){
      return this.httpClient.get<Students[]>(this.url);
    }





}
