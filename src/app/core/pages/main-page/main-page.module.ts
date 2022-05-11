import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './main-page.component';
import { UserNavModule } from './user-nav/user-nav.module';
import { UserAvatarModule } from './user-avatar/user-avatar.module';
import { RouterModule } from '@angular/router';
import { UserSelfModule } from './user-self/user-self.module';
import { UserSettingsModule } from './user-settings/user-settings.module';
import { UserNewsModule } from '../../components/user-news/user-news.module';

@NgModule({
  declarations: [MainPageComponent],
  imports: [
    CommonModule,
    UserNavModule,
    UserAvatarModule,
    RouterModule,
    UserSelfModule,
    UserSettingsModule,
    UserNewsModule,
  ],
  exports: [MainPageComponent],
})
export class MainPageModule {}
