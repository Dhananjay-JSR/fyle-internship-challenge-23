import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { UserDetailsComponent } from './user/user-details/user-details.component';

const routes: Routes = [
  { path: '', component: AppComponent },
  {
    path: 'user/:username',
    component: UserDetailsComponent,
  },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
