import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeadlinePipe } from '@shared/pipes';

@NgModule({
  declarations: [HeadlinePipe],
  imports: [
    CommonModule
  ],
  exports: [HeadlinePipe]
})
export class SharedModule { }
