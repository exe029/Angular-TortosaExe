import { NgModule } from '@angular/core';
import { Routes , RouterModule} from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CursosCardComponent } from './components/cursos-card/cursos-card.component';
import { StudentsListComponent } from './components/students-list/students-list.component';
import { CursoslistComponent } from './pages/cursoslist/cursoslist.component';

const routes: Routes= [
    {
        path:'',
        component:HomeComponent,
        children:[
            {
                path: 'cursos',
                component:CursoslistComponent,
            },
            {
                path: 'students',
                component:StudentsListComponent,
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
