import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserApiService } from '../../services/user-api.service'; // TODO: Use alias
import { Router } from '@angular/router';
import { REGEXP } from '../../../shared/regexp'; // TODO: Use alias
import { IUserSignIn } from '../../../interfaces/user.interface'; // TODO: Use alias
import { AuthService } from '../../services/auth.service'; // TODO: Use alias

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
})
export class SignInComponent {
  constructor(private userApiService: UserApiService, private router: Router, private authService: AuthService) {}

  singInForm = new FormGroup({
    password: new FormControl('', [Validators.required, Validators.pattern(REGEXP.password)]),
    email: new FormControl('', [Validators.required, Validators.pattern(REGEXP.email)]),
  });

  hide_password_icon = true;
  email = this.singInForm.get('email');
  password = this.singInForm.get('password');

  userReg: IUserSignIn | undefined;

  getErrorMessage(): string { // TODO: Separate page and form sing-in form. Add sign-in-form component
    if (this.email!.hasError('required')) {
      return 'You must enter a value';
    }
    return this.email!.hasError('email') ? 'Not a valid email' : '';
  }

  getUsers(userIn: IUserSignIn): void {
    this.userApiService.getUser().subscribe(users => { // Need to refactor. Remove users filter, generation token. It is not part of the component. It is part of service.
      const user = users.find(user => userIn.id === user.id) || null;
      user ? this.authService.generateToken() : null;
      this.userApiService.user$.next(user);
      if (localStorage.getItem('token')) {
        void this.router.navigate(['/user']);
      }
    });
  }

  signIn(): void {
    this.userApiService.getUserCreeds().subscribe(result => { // Need to refactor. Remove users filter, generation token. It is not part of the component. It is part of service.
      this.userReg = result.find(user => user.email === this.email?.value && user.password === this.password?.value);
      this.userReg ? this.getUsers(this.userReg) : alert('error');
      this.authService.userAuth$.next(!!localStorage.getItem('token'));
    });
  }
}
