import { NgModule } from '@angular/core';
import { Routes , RouterModule} from '@angular/router';
import { FormComponent } from './components/form/form.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';

const routes: Routes= [
  {
      path:'',
      component: LoginPageComponent,
      children:[
          {
              path: 'login',
              component: LoginPageComponent,
          }
        ] }
      ];
@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
    exports:[RouterModule]
  })
export class AuthRoutingModule { }
