import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service'; // TODO: Use alias

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent { // TODO fix normal render logout button

  constructor(private router: Router, public authService: AuthService) {}

  logout = (): void => { // TODO: Don't use arrow functions like methods
    localStorage.removeItem('token'); // TODO: Don't change localstorage from component.
    void this.router.navigate(['/sign-in']);
  };
}
