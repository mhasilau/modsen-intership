import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { UserSelfComponent, UserSettingsComponent } from '@core/pages';
import { UserNewsComponent } from '@shared/user-news/user-news.component';
import { UserNewsModule } from '@shared/user-news/user-news.module';
import { UserSelfModule } from '@core/pages/main-page/user-self/user-self.module';
import { UserSettingsModule } from '@core/pages/main-page/user-settings/user-settings.module';

@NgModule({
  imports: [
    UserNewsModule,
    UserSelfModule,
    UserSettingsModule,
    CommonModule,
    RouterModule.forChild([
      { path: 'settings', component: UserSettingsComponent },
      { path: 'self', component: UserSelfComponent },
      { path: 'news', component: UserNewsComponent },
    ])
  ]
})
export class UserLazyModule { }
