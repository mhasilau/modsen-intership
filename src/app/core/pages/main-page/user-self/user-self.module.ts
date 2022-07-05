import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserSelfComponent } from '@core/pages';
import { UserNewsModule } from '@shared/user-news/user-news.module';
import { MatButtonModule } from '@angular/material/button';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [UserSelfComponent],
    imports: [CommonModule, UserNewsModule, MatButtonModule, TranslateModule],
  exports: [UserSelfComponent],
})
export class UserSelfModule {}
