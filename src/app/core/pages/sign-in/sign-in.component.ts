import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { UserApiService } from '../../services/user-api.service';
import { Router } from '@angular/router';
import { REGEXP } from '../../../shared/regexp';
import { IUserSignIn } from '../../../interfaces/user.interface';
import { AuthService } from '../../services/auth.service';
import { Store } from '@ngrx/store';
//import { loginAction } from '../../store/auth/store/auth.action';
import { UserFacade } from '../../store/auth/store/auth.facade';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
})
export class SignInComponent {


  constructor(private userApiService: UserApiService, private router: Router, private authService: AuthService, private store: Store, public userFacade: UserFacade) {}
  // TODO add FormGroup
  password = new FormControl('', [Validators.required, Validators.pattern(REGEXP.password)]);

  email = new FormControl('', [Validators.required, Validators.pattern(REGEXP.email)]);
  hide_password_icon = true;
  // authSuccess$: Observable<boolean> = this.store.pipe(select(getAuthSuccess))
  // authError$: Observable<boolean> = this.store.pipe(select(getAuthError))
  // serverError$: Observable<string> = this.store.pipe(select(getServerError))

  userReg: IUserSignIn | undefined;

  getErrorMessage(): string {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }
    return this.email.hasError('email') ? 'Not a valid email' : '';
  }

  // getUsers(userIn: IUserSignIn) {
  //   this.userApiService.getUser().subscribe(users => {
  //     const user = users.find(user => userIn.id === user.id) || null; // TODO send data to pipe(map(...))
  //     user ? this.userApiService.generateToken() : null;
  //     this.userApiService.user$.next(user);
  //     if (localStorage.getItem('token')) {
  //       void this.router.navigate(['/user']);
  //     }
  //   })
  // }

  // signIn(): void {
  //   this.store.dispatch(loginAction({ // TODO to facade
  //     login: this.email.value,
  //     password: this.password.value
  //   }));


  signIn(): void {
    this.userFacade.login(this.email.value, this.password.value);
  }

  // signIn(event: any): void {
  //   console.log(event);
  // }


  // this.userApiService.getUserCreeds().subscribe(result => {
    //   this.userReg = result.find(user => user.email === this.email.value && user.password === this.password.value);
    //   this.userReg ? this.getUsers(this.userReg) : alert('error');
    //   this.authService.userAuth$.next(!!localStorage.getItem('token'))
    // });
  // }


}
