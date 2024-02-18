import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { UserDetailsComponent } from './user/user-details/user-details.component';
import { RepositoryComponent } from './user/repository/repository.component';
import { ViewPanelComponent } from './user/repository/view-panel/view-panel.component';

@NgModule({
  declarations: [
    AppComponent,
    UserDetailsComponent,
    RepositoryComponent,
    ViewPanelComponent,
  ],
  imports: [BrowserModule, HttpClientModule, FormsModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
