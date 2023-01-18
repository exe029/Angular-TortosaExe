import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes , RouterModule} from '@angular/router';
import { PageNotfoundComponent } from './shared/page-notfound/page-notfound.component';
import { AuthGuard } from './auth/guards/auth.guard';




const routes: Routes= [
  {
    path:'',
    pathMatch: 'full',
    redirectTo:'/auth',
},
{
  path:'auth',
  loadChildren: ()=> import('./auth/auth.module').then( m=> m.AuthModule )
},
{
  path:'dashboard',
  loadChildren: ()=> import('./dashboard/dashboard.module').then( m=> m.DashboardModule ),
  canLoad:[AuthGuard]
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
