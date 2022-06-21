import { Component, OnDestroy, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { AuthService, RouterService } from '@core/services';
import { UserService } from '@core/services/user.service';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {

  private destroy$ = new Subject<void>();

  constructor(
    private translateService: TranslateService,
    private routerService: RouterService,
    private authService: AuthService,
    private userService: UserService
  ) {}


  ngOnInit(): void {
    this.toEnglish();
    this.authService.init();
    this.userService.user$.subscribe(u => console.log(u)); // to see in console user
    this.authService.token$.pipe(
      takeUntil(this.destroy$)
    ).subscribe(token => {
      console.log('app', token);
      if (token) {
        this.userService.getCurrentUser();
      } else {
        this.userService.user$.next(null);
      }
    });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  toRussian(): void {
    this.translateService.use('ru');
  }

  toEnglish(): void {
    this.translateService.use('en');
  }


}
