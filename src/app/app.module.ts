import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HttpClientModule } from  '@angular/common/http';
import {FormsModule} from "@angular/forms";
import { AppRoutingModule } from './app-routing.module';
import { UserComponentComponent } from './user/user-component/user-component.component';
import { RepositoryComponent } from './user/repository/repository.component';
import { ViewPanelComponent } from './user/repository/view-panel/view-panel.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponentComponent,
    RepositoryComponent,
    ViewPanelComponent
  ],
    imports: [
        BrowserModule,
        HttpClientModule,
        FormsModule,
        AppRoutingModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
