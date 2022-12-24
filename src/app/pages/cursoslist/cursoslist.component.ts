import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/service/data.service';
import { Cursos } from '../../interface/cursos';


@Component({
  selector: 'app-cursoslist',
  templateUrl: './cursoslist.component.html',
  styleUrls: ['./cursoslist.component.scss']
})
export class CursoslistComponent implements OnInit {
  arrayCursos:Cursos[]=[];

  constructor( private dataService:DataService ) { }

  ngOnInit(): void {
    this.dataService.getCursos().subscribe(
      resp => this.arrayCursos = resp
    );
  }

}
