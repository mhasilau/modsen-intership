import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserSelfComponent } from './user-self.component';
import { UserNewsModule } from '../../../components/user-news/user-news.module';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [UserSelfComponent],
    imports: [CommonModule, UserNewsModule, MatButtonModule],
  exports: [UserSelfComponent],
})
export class UserSelfModule {}
