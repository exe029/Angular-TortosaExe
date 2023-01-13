import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes , RouterModule} from '@angular/router';
import { StudentsListComponent } from './dashboard/components/students-list/students-list.component';
import { PageNotfoundComponent } from './shared/page-notfound/page-notfound.component';




const routes: Routes= [
  {
    path:'',
    pathMatch: 'full',
    redirectTo:'/dashboard',
},
{
  path:'auth',
  loadChildren: ()=> import('./auth/auth.module').then( (m)=> m.AuthModule )
},
{
  path:'dashboard',
  loadChildren: ()=> import('./dashboard/dashboard.module').then( (m)=> m.DashboardModule )
},
{
  path:'404',
  component:PageNotfoundComponent,
},
{
  path:'**',
  redirectTo:'404',
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
