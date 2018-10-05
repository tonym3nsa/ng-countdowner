import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgCountdownerComponent } from './ng-countdowner/ng-countdowner.component';

@NgModule({
  declarations: [
    AppComponent,
    NgCountdownerComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
