import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FirestoreModule } from '@angular/fire/firestore';

import { StudentsListComponent } from './students-list.component';
import { FirebaseService } from '../../../service/firebase.service';
import { MatDialogModule } from '@angular/material/dialog';

describe('StudentsListComponent', () => {
  let component: StudentsListComponent;
  let fixture: ComponentFixture<StudentsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [],
      declarations: [ StudentsListComponent ],
      providers: [FirebaseService,]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
