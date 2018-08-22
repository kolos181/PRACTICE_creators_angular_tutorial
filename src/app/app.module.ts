import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CreatorsComponent } from './components/creators/creators.component';
import {FormsModule} from '@angular/forms';
import { CreatorDetailComponent } from './components/creator-detail/creator-detail.component';
import { MessagesComponent } from './components/messages/messages.component';

@NgModule({
  declarations: [
    AppComponent,
    CreatorsComponent,
    CreatorDetailComponent,
    MessagesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
