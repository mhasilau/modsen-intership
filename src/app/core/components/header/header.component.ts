import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  // eslint-disable-next-line prettier/prettier
  isLogin: boolean = false;
  signInUp: string = 'sign-in';

  authPage = (): void => {
    this.signInUp === 'sign-in'
      ? (this.signInUp = 'sign-up')
      : (this.signInUp = 'sign-in');
  };

  logout = (): void => {
    this.isLogin = false;
  };
}
