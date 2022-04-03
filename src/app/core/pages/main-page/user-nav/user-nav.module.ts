import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserNavComponent } from './user-nav.component';

@NgModule({
  declarations: [UserNavComponent],
  imports: [CommonModule],
  exports: [UserNavComponent],
})
export class UserNavModule {}
