import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DataService } from 'src/app/service/data.service';
import { CursosCardComponent } from './cursos-card.component';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';


describe('CursosCardComponent', () => {
  let component: CursosCardComponent;
  let fixture: ComponentFixture<CursosCardComponent>;


  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CursosCardComponent ],
      providers: [DataService],
      imports: [HttpClientTestingModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CursosCardComponent);
    component = fixture.componentInstance;


    fixture.detectChanges();

  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });



});
