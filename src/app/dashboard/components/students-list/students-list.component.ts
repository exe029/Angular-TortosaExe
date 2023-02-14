import { Component, OnInit, OnDestroy } from '@angular/core';
import { Student } from 'src/app/interface/students';
import { FirebaseService } from '../../../service/firebase.service';
import {  MatDialog } from '@angular/material/dialog';
import { StudentsDialogComponent } from '../students-dialog/students-dialog.component';
import { Subscription, Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { addStudent } from 'src/app/app-state/actions/students.actions';



@Component({
  selector: 'app-students-list',
  templateUrl: './students-list.component.html',
  styleUrls: ['./students-list.component.scss'],
})
export class StudentsListComponent implements OnInit, OnDestroy {

  students$:Observable<Student[]>
  displayedColumns: string[] = ['fname', 'email', 'subject', 'edit', 'delete'];
  dataSource : any;
  // students : Student[]=[];
  updateSubscription: Subscription;

  constructor(private firebaseService:FirebaseService, private dialogService:MatDialog, private store:Store<{students: Student[]}>) {
    this.students$ = this.store.select('students');

  }

  ngOnInit(): void {

    console.log(this.students$)
    this.getStudents();
    this.updateSubscription = this.firebaseService.updateData$.subscribe( resp => this.getStudents() )
  }

  async getStudents () {
    try {
      const response = await this.firebaseService.getCollection("students");
      const data = await this.getArrayFromCollection(response);
      this.dataSource= data;
      const result = this.store.dispatch(addStudent({student:data[0]}))
      console.log(data, result)
    } catch (error){
      console.error(error)
    }
  }
  getArrayFromCollection = (collection: any) => {
    return collection.docs.map((doc: any) => {
      return { ...doc.data(), id: doc.id };
    });
  };

  addStudents() {
    this.dialogService.open(StudentsDialogComponent)
  }

  async onDelete(elementid: string){
    const response = await this.firebaseService.deleteStudent(elementid);
    this.firebaseService.updateData();
     console.log(response)
  }

 onEdit(element: string){
  this.dialogService.open(StudentsDialogComponent, {data: {data:element, type:'edit'}})
 }

 ngOnDestroy(): void {
    this.updateSubscription.unsubscribe();
 }
}
