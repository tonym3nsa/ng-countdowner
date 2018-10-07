import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {CountdownerModule} from './countdowner/countdowner.module';
import { AppComponent } from './app.component';
import { NgCountdownerComponent } from './countdowner/ng-countdowner/ng-countdowner.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CountdownerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
