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
  setDoc,
  getDoc,
  collectionSnapshots,
} from '@angular/fire/firestore';

import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FirebaseService {

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

  async setDocument(nameCollec:string, id:string,data:any){
    // const docRef = doc(this.firestore,`students/${id}`);
    // const docS
    const updateDoc = await setDoc(doc(this.firestore,`${nameCollec}/${id}`),data);
    return updateDoc;

  }

  deleteStudent(elementid: string){
     const collectdoc = doc(this.firestore, `students/${elementid}`);
     return deleteDoc(collectdoc);
  }

  updateData(){
    this.updateDataSubject.next(true);
  }

}
