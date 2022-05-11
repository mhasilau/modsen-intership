import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserSelfComponent } from './user-self.component';
import { UserNewsModule } from '../../../components/user-news/user-news.module';

@NgModule({
  declarations: [UserSelfComponent],
  imports: [CommonModule, UserNewsModule],
  exports: [UserSelfComponent],
})
export class UserSelfModule {}
