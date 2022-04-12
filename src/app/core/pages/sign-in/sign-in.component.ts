import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { UserApiService } from '../../services/user-api.service';
import { Router } from '@angular/router';
import { REGEXP } from "../../../shared/regexp";
import {IUser, IUserSignIn} from "../../../interfaces/user.interface";
import {AuthService} from "../../services/auth.service";

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
})
export class SignInComponent {
  constructor(private userApiService: UserApiService, private router: Router, private authService: AuthService) {}

  pass = new FormControl('', [Validators.required, Validators.pattern(REGEXP.password)]);

  email = new FormControl('', [Validators.required, Validators.pattern(REGEXP.email)]);
  hide = true;

  reg = {
    email: '',
    pass: '',
  };

  userReg: IUserSignIn | undefined;

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }
    return this.email.hasError('email') ? 'Not a valid email' : '';
  }

  getUsers(userIn: IUserSignIn) {
    this.userApiService.getUser().subscribe(users => {
      const user = users.find(user => userIn.id === user.id) || null;
      user ? this.generateToken() : null;
      this.userApiService.user$.next(user);
      if (localStorage.getItem('token')) {
        void this.router.navigate(['/user']);
      }
    })
  }

  signIn(): void {
    this.userApiService.getUserCreeds().subscribe(result => {
      this.userReg = result.find(user => user.email === this.email.value && user.password === this.pass.value);
      this.userReg ? this.getUsers(this.userReg) : alert('error');
      this.authService.userAuth$.next(!!localStorage.getItem('token'))
    });
  }

  generateToken() {
    const num = Math.random();
    localStorage.setItem('token', String(num * Math.pow(10, num.toString().length - 2)));
  }
}
