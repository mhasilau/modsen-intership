import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LocalStorageService, AuthService, UserApiService, RouterService } from '@core/services';
import { IUserSignIn } from '@app/interfaces';
import { REGEXP } from '@shared/validators';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
})
export class SignInComponent implements OnInit{
  constructor(
    private userApiService: UserApiService,
    private routerService: RouterService,
    private authService: AuthService,
    private localStorageService: LocalStorageService
  ) {}

  ngOnInit(): void {
    console.log(this.authService.userAuth$);
    // if (this.authService.token$) {
    //   this.routerService.userPageNavigate();
    //   console.log(this.authService.token$.subscribe());
    // }
  }

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
      console.log(this.authService.token$);
      if (this.authService.token$) {
        void this.routerService.userPageNavigate();
      }
    });
  }

  signIn(): void {
    this.userApiService.getUserCreeds().subscribe(result => {
      this.userReg = result.find(user => user.email === this.email?.value && user.password === this.password?.value);
      this.userReg ? this.getUsers(this.userReg) : alert('error');
      this.authService.userAuth$.next(!!this.localStorageService.getToken());
    });
  }

}
