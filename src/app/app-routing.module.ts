import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {AppComponent} from "./app.component";
import {UserComponentComponent} from "./user/user-component/user-component.component";

const routes: Routes = [
  { path: '', component: AppComponent  },
  {
    path: 'user/:username',
    component: UserComponentComponent
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
