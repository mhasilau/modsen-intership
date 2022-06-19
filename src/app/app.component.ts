import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { AuthService, RouterService } from '@core/services';
import { UserService } from '@core/services/user.service';

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
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.toEnglish();
    this.authService.init(); // TODO create reactive
    this.userService.user$.subscribe(u => console.log(u)); // TODO see in console user
    this.authService.token$.subscribe(token => {
      if (token) {
        this.userService.getCurrentUser();
      } else {
        this.userService.user$.next(null);
      }
    });
  }

  toRussian(): void {
    this.translateService.use('ru');
  }

  toEnglish(): void {
    this.translateService.use('en');
  }


}
