import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CursoslistComponent } from './cursoslist.component';

describe('CursoslistComponent', () => {
  let component: CursoslistComponent;
  let fixture: ComponentFixture<CursoslistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CursoslistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CursoslistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
