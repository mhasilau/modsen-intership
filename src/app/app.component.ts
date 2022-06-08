import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { LocalStorageService, RouterService } from '@core/services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit{
  title: string = '';
  constructor(
    private translateService: TranslateService,
    private localStorageService: LocalStorageService,
    private router: RouterService
  ) {}

  ngOnInit(): void {
    this.toEnglish();
    this.navigate();
  }

  toRussian(): void {
    this.translateService.use('ru');
  }

  toEnglish(): void {
    this.translateService.use('en');
  }

  navigate(): void {
    this.localStorageService.getItem('token') ? this.router.navigate('') : this.router.navigate('sign-in'); // TODO why doesn't work?
  }
}
