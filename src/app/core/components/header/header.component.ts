import { Component } from '@angular/core';
import {Router} from '@angular/router';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {

  // eslint-disable-next-line prettier/prettier
  constructor(private router: Router) {}
  // eslint-disable-next-line prettier/prettier
  isLogin: boolean = false;
  signInUp: string = 'Sign-in';
  link: string = '/sing-in';

  authPage = (): void => {
    if (this.router.url === '/sign-in') {
      this.signInUp = 'Sign-up';
      this.link = '/sign-up';
    } else {
      this.signInUp = 'Sign-in';
      this.link = '/sign-in';
    }
  };

  logout = (): void => {
    this.isLogin = false;
  };
}
