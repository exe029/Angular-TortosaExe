import { Injectable } from '@angular/core';


import {
  Firestore,
  getDocs,
  collection,
  collectionData,
  addDoc,
  doc,
  deleteDoc,
  UpdateData,
  collectionSnapshots,
} from '@angular/fire/firestore';
import { stringLength } from '@firebase/util';
import { DataService } from './data.service';
import { Student } from '../interface/students';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FirebaseService {

  // behavior subject patern
  private updateDataSubject = new BehaviorSubject<any>(null);
  updateData$: Observable<any> = this.updateDataSubject.asObservable();

  constructor(private firestore: Firestore) {}

  createDoc(nameCollec: string, data: any){
    const collec = collection(this.firestore, nameCollec);
    return addDoc(collec, data);
  }

  getCollection(nameCollec:string){
    const collec = collection(this.firestore, nameCollec);
    return getDocs(collec)
  }

  deleteStudent(elementid: string){
    // const tutorialsRef = db.collection('tutorials');
    // tutorialsRef.doc('id').delete();

     const collectdoc = doc(this.firestore, `students/${elementid}`);
     return deleteDoc(collectdoc);

  }

  updateData(){
    this.updateDataSubject.next(true);
  }

}
