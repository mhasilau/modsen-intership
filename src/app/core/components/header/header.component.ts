import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  // eslint-disable-next-line prettier/prettier
  public isLogin: boolean = false;

  login = (): void => {
    this.isLogin = true;
  };

  logout = (): void => {
    this.isLogin = false;
  };

}
