import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { DataService } from 'src/app/service/data.service';
import { Curso } from '../../interface/cursos';


@Component({
  selector: 'app-cursoslist',
  templateUrl: './cursoslist.component.html',
  styleUrls: ['./cursoslist.component.scss']
})
export class CursoslistComponent implements OnInit {
  arrayCursos$:Observable<Curso[]>;

  // arrayCursos:Cursos[]=[];
  // suscription$: Subscription;


  constructor( private dataService:DataService ) { }

  ngOnInit(): void {
    this.arrayCursos$ = this.dataService.getCursos();
    // this.suscription$ = this.dataService.getCursos().subscribe(
    //   resp => this.arrayCursos = resp
    // );
  }

  // ngOnDestroy(): void {
  //   console.log('Se destruye componente y se desuscribe');
  //   this.suscription$.unsubscribe();
  // }

}
