import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Curso } from '../interface/cursos';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  url = 'https://run.mocky.io/v3/7c2f71ff-4f24-4908-b126-d2a223d138b3';

  constructor( private httpClient:HttpClient) {}

    getCursos(){
      return this.httpClient.get<Curso[]>(this.url).pipe( map((subjects:Curso[])=> subjects.filter( el => el.active === true )));
    }



}
