import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserNewsComponent } from './user-news.component';

@NgModule({
  declarations: [UserNewsComponent],
  imports: [CommonModule],
  exports: [UserNewsComponent],
})
export class UserNewsModule {}
