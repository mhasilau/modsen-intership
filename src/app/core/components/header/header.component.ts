import { Component } from '@angular/core';
import { AuthService, LocalStorageService, RouterService } from '@core/services';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {

  constructor(
    private routerService: RouterService,
    public authService: AuthService,
    private localStorageService: LocalStorageService
  ) {}

  logout(): void {
    this.authService.logout();
  };
}
