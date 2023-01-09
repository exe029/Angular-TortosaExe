import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes , RouterModule} from '@angular/router';
import { StudentsListComponent } from './components/students-list/students-list.component';
import { CursoslistComponent } from './pages/cursoslist/cursoslist.component';
import { HomeComponent } from './pages/home/home.component';



const routes: Routes= [
  {
    path:'',
    component:HomeComponent,
},
{
  path:'students',
  component: StudentsListComponent,
},
{
  path:'cursos',
  component: CursoslistComponent,
},
{
  path:'**',
  redirectTo:'',
},



];

@NgModule({
  declarations: [],
  imports: [
    CommonModule, RouterModule.forRoot(routes)
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
