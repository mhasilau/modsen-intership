import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [HeaderComponent],
    imports: [CommonModule, RouterModule, MatButtonModule, TranslateModule],
  exports: [HeaderComponent],
})
export class HeaderModule {}
