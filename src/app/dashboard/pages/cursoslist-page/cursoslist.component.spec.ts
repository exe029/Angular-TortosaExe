import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CursoslistComponent } from './cursoslist.component';
import { HttpClientTestingModule} from '@angular/common/http/testing';
import { DataService } from 'src/app/service/data.service';
import { Curso } from '../../../interface/cursos';

describe('CursoslistComponent', () => {
  let component: CursoslistComponent;
  let fixture: ComponentFixture<CursoslistComponent>;
  let compiled: HTMLElement;
  let service: DataService;


  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientModule, HttpClientTestingModule],
      declarations: [ CursoslistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CursoslistComponent);
    component = fixture.componentInstance;
    service = TestBed.inject( DataService);

    fixture.detectChanges();
    compiled = fixture.nativeElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('debe mostrar tittle', () => {

    const h1 = compiled.querySelector('h1');
    expect( h1?.textContent).toContain('Cursos')


  });



});
