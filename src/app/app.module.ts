import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DevmarkModule } from 'devmark'

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    DevmarkModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
