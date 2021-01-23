import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {RegFormComponent} from "./components/reg-form/reg-form.component";

const routes: Routes = [
  {
    path:'',
    component:RegFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
