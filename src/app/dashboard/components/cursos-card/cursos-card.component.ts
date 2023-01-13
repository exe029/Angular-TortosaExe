import { Component, Input, OnInit } from '@angular/core';
import { Curso } from '../../../interface/cursos';

@Component({
  selector: 'app-cursos-card',
  templateUrl: './cursos-card.component.html',
  styleUrls: ['./cursos-card.component.scss']
})
export class CursosCardComponent implements OnInit {
  @Input() curso:Curso={
    id:0,
    nombre:'',
    descripcion:'',
    precio: '',
    duracion: '',
    active:false
  }


  constructor() { }

  ngOnInit(): void {
  }

}
