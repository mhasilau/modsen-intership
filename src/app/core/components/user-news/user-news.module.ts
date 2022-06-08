import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserNewsComponent } from './user-news.component';
import { HeadlinePipe } from '../../../shared/headline.pipe'; // TODO: Use alias

@NgModule({
  declarations: [UserNewsComponent, HeadlinePipe],
  imports: [CommonModule],
  exports: [UserNewsComponent],
})
export class UserNewsModule {}
