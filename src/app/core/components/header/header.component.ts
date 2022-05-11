import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent { // TODO fix normal render logout button

  constructor(private router: Router, public authService: AuthService) {}

  logout = (): void => {
    localStorage.removeItem('token');
    console.log(this.authService.userAuth$);
    this.authService.userAuth$.next(false);
    void this.router.navigate(['/sign-in']);
  };
}
