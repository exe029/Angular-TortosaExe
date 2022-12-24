import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Cursos } from '../interface/cursos';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  url = 'https://run.mocky.io/v3/a09679da-d397-4a67-b976-e6c2e23c5948';

  constructor( private httpClient:HttpClient) {}

    getCursos(){
      return this.httpClient.get<Cursos[]>(this.url);
    }



}
