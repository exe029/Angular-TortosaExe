import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule} from '@angular/common/http/testing';

import { FormNewStudentComponent } from './form-new-student.component';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserDynamicTestingModule } from '@angular/platform-browser-dynamic/testing';
import { MatDialogModule } from '@angular/material/dialog';
import { BrowserModule } from '@angular/platform-browser';
import { FirestoreModule } from '@angular/fire/firestore';
import { FirebaseAppModule } from '@angular/fire/app';
import { FirebaseService } from '../../../service/firebase.service';

describe('FormNewStudentComponent', () => {
  let component: FormNewStudentComponent;
  let fixture: ComponentFixture<FormNewStudentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FirestoreModule,FirebaseAppModule,FirebaseService],
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
