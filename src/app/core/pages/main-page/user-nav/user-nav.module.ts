import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserNavComponent } from './user-nav.component';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [UserNavComponent],
  imports: [CommonModule, RouterModule, MatButtonModule, TranslateModule],
  exports: [UserNavComponent],
})
export class UserNavModule {}
