import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './main-page.component';
import { UserNavModule } from './user-nav/user-nav.module';
import { UserAvatarModule } from './user-avatar/user-avatar.module';

@NgModule({
  declarations: [MainPageComponent],
  imports: [CommonModule, UserNavModule, UserAvatarModule],
  exports: [MainPageComponent],
})
export class MainPageModule {}
