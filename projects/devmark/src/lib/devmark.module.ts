import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { DevmarkComponent } from './devmark.component';

@NgModule({
  declarations: [DevmarkComponent],
  imports: [
    BrowserModule
  ],
  exports: [DevmarkComponent]
})
export class DevmarkModule { }
