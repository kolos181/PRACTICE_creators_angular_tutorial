import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CreatorsComponent } from './components/creators/creators.component';
import {FormsModule} from '@angular/forms';
import { CreatorDetailComponent } from './components/creator-detail/creator-detail.component';
import { MessagesComponent } from './components/messages/messages.component';
import { AppRoutingModule } from './/app-routing.module';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import {HttpClientModule} from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './services/in-memory-data.service';
import { CreatorSearchComponent } from './components/creator-search/creator-search.component';

@NgModule({
  declarations: [
    AppComponent,
    CreatorsComponent,
    CreatorDetailComponent,
    MessagesComponent,
    DashboardComponent,
    CreatorSearchComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
