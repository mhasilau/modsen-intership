import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LocalStorageService, AuthService, UserApiService, RouterService } from '@core/services';
import { IUserSignIn } from '@app/interfaces';
import { REGEXP } from '@shared/validators';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
})
export class SignInComponent {
  constructor(
    private userApiService: UserApiService,
    private router: RouterService,
    private authService: AuthService,
    private localStorageService: LocalStorageService
  ) {}

  singInForm = new FormGroup({
    password: new FormControl('', [Validators.required, Validators.pattern(REGEXP.password)]),
    email: new FormControl('', [Validators.required, Validators.pattern(REGEXP.email)]),
  });

  hide_password_icon = true;
  email = this.singInForm.get('email');
  password = this.singInForm.get('password');

  userReg: IUserSignIn | undefined;

  getErrorMessage(): string {
    if (this.email!.hasError('required')) {
      return 'You must enter a value';
    }
    return this.email!.hasError('email') ? 'Not a valid email' : '';
  }

  getUsers(userIn: IUserSignIn): void {
    this.userApiService.getUser().subscribe(users => {
      const user = users.find(user => userIn.id === user.id) || null;
      user ? this.localStorageService.generateToken() : null;
      this.userApiService.user$.next(user);
      if (this.localStorageService.getItem('token')) {
        void this.router.navigate('/user');
      }
    });
  }

  signIn(): void {
    this.userApiService.getUserCreeds().subscribe(result => {
      this.userReg = result.find(user => user.email === this.email?.value && user.password === this.password?.value);
      this.userReg ? this.getUsers(this.userReg) : alert('error');
      this.authService.userAuth$.next(!!this.localStorageService.getItem('token'));
    });
  }
}
