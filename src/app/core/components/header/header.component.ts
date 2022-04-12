import {Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from "../../services/auth.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router, private authService: AuthService) {}

  ngOnInit(): void {
    this.authService.userAuth$.subscribe(value => this.isLogin = value);
    console.log(this.isLogin)
  }

  isLogin: boolean = false;
  signInUp: string = 'Sign-in';
  link: string = '/sing-in';


  authPage = (): void => {
    if (this.router.url === '/sign-in') {
      this.signInUp = 'Sign-up';
      void this.router.navigate(['/sign-up']);
    } else {
      this.signInUp = 'Sign-in';
      void this.router.navigate(['/sign-in']);
    }
  };

  logout = (): void => {
    localStorage.removeItem('token');
    void this.router.navigate(['/sign-in']);
    this.isLogin = false;
  };
}
