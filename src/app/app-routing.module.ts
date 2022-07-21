import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmpdataComponent } from './empdata/empdata.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [

  {path:'',component:LoginComponent},
 {path:'login',component:LoginComponent},
  {path:'empdata',component:EmpdataComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
