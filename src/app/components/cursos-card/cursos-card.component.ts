import { Component, Input, OnInit } from '@angular/core';
import { Cursos } from 'src/app/interface/cursos';

@Component({
  selector: 'app-cursos-card',
  templateUrl: './cursos-card.component.html',
  styleUrls: ['./cursos-card.component.scss']
})
export class CursosCardComponent implements OnInit {
  @Input() cursos:Cursos={
    nombre:'',
    descripcion:'',
    precio: 0,
    duracion: 0,

  }


  constructor() { }

  ngOnInit(): void {
  }

}
