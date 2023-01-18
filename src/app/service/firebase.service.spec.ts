import { TestBed } from '@angular/core/testing';
import { FirebaseApp, FirebaseAppModule } from '@angular/fire/app';
import { FirestoreInstances, FirestoreModule } from '@angular/fire/firestore';
import { Firestore } from '@angular/fire/firestore/firebase';

import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideDatabase,getDatabase } from '@angular/fire/database';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { provideStorage,getStorage } from '@angular/fire/storage';
import { BrowserDynamicTestingModule } from '@angular/platform-browser-dynamic/testing';
import { FirebaseService } from 'src/app/service/firebase.service';

describe('FirebaseService', () => {
  let service: FirebaseService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports : [getAuth, getDatabase, getFirestore, getStorage,provideAuth,provideDatabase,provideFirestore,provideStorage,]

    });
    service = TestBed.inject(FirebaseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
