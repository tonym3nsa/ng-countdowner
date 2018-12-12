import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgCountdownerComponent } from './ng-countdowner/ng-countdowner.component';
@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    NgCountdownerComponent
  ],
  exports: [
    NgCountdownerComponent
  ]
})
export class CountdownerModule { }
