import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { AuthService, RouterService } from '@core/services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(
    private translateService: TranslateService,
    private routerService: RouterService,
    private authService: AuthService,
  ) {}

  ngOnInit(): void {
    this.toEnglish();
    this.authService.init(); // TODO create reactive
  }

  toRussian(): void {
    this.translateService.use('ru');
  }

  toEnglish(): void {
    this.translateService.use('en');
  }


}
