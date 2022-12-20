import { Component, OnInit } from '@angular/core';
import { Student } from 'src/app/interface/students';
import {MatTableDataSource} from '@angular/material/table';
import { FirebaseService } from '../../service/firebase.service';
import { async } from '@firebase/util';
import { MatDialog } from '@angular/material/dialog';
import { StudentsDialogComponent } from '../students-dialog/students-dialog.component';
import { getFirestore } from '@angular/fire/firestore';
import { compileNgModule } from '@angular/compiler';
import { CloseScrollStrategy } from '@angular/cdk/overlay';
import { collection } from 'firebase/firestore';
import { DataService } from '../../service/data.service';



@Component({
  selector: 'app-students-list',
  templateUrl: './students-list.component.html',
  styleUrls: ['./students-list.component.scss'],
})
export class StudentsListComponent implements OnInit {

  displayedColumns: string[] = ['fname', 'email', 'subject', 'edit', 'delete'];
  dataSource : any;
  students : Student[]=[];

  constructor(private firebaseService:FirebaseService, private dialogService:MatDialog) {}

  ngOnInit(): void {
    this.getStudents()

  }

  async getStudents () {
    try {
      const response = await this.firebaseService.getCollection("students");
      const data = await this.getArrayFromCollection(response);
      this.dataSource= data;
      console.log(data)
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
     console.log(response)
  }

 onEdit(element: string){
  this.dialogService.open(StudentsDialogComponent, {data: element})

 }
}
