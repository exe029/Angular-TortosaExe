import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormNewStudentComponent } from './form-new-student.component';

describe('FormNewStudentComponent', () => {
  let component: FormNewStudentComponent;
  let fixture: ComponentFixture<FormNewStudentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormNewStudentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormNewStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
