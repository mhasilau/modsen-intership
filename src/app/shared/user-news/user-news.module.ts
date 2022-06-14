import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserNewsComponent } from './user-news.component';
import { SharedModule } from '@shared/shared.module';


@NgModule({
  declarations: [UserNewsComponent],
  imports: [CommonModule, SharedModule],
  exports: [UserNewsComponent],
})
export class UserNewsModule {}
