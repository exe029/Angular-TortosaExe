import { TestBed } from '@angular/core/testing';

import { DataService } from './data.service';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { Curso } from '../interface/cursos';

describe('DataService', () => {
  let service: DataService;


  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule, HttpClientTestingModule]

    });
    service = TestBed.inject(DataService);

  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });


  // it('debe traer los cursos', (done) => {

  //   service.getCursos().subscribe( Curso => {
  //     expect ( ).toBe('');
  //     done();
  //   })
  // })



});
