import { NgModule } from '@angular/core';
import { Routes , RouterModule} from '@angular/router';
import { HomeComponent } from './pages/home-page/home.component';
import { CursoslistComponent } from './pages/cursoslist-page/cursoslist.component';
import { DashHomeComponent } from './components/dash-home/dash-home.component';
import { StudentsComponent } from './pages/students-page/students.component';

const routes: Routes= [
    {
        path:'',
        component:HomeComponent,
        children:[
            {
            path: '',
            component:DashHomeComponent,
            },
            {
                path: 'cursos',
                component:CursoslistComponent,
            },
            {
                path: 'students',
                component:StudentsComponent,
            },
        ]
    }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports:[RouterModule]
})
export class DashboardRoutingModule { }
