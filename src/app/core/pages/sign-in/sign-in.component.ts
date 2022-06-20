import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService, RouterService, UserService } from '@core/services';
import { IUserSignIn } from '@app/interfaces';
import { REGEXP } from '@shared/validators';
import { filter } from 'rxjs';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
})
export class SignInComponent implements OnInit{

  singInForm = new FormGroup({
    password: new FormControl('', [Validators.required, Validators.pattern(REGEXP.password)]),
    email: new FormControl('', [Validators.required, Validators.pattern(REGEXP.email)]),
  });

  hidePasswordIcon = true;
  userReg: IUserSignIn | undefined;

  constructor(
    private routerService: RouterService,
    private authService: AuthService,
    private userService: UserService
  ) {}

  ngOnInit(): void {
      this.userService.user$.pipe(
        filter(user => !!user)
      ).subscribe(() => this.routerService.userPageNavigate());
  }

  // getErrorMessage(): string {
  //   if (this.email!.hasError('required')) {
  //     return 'You must enter a value';
  //   }
  //   return this.email!.hasError('email') ? 'Not a valid email' : '';
  // }


  signIn(): void {
    const email: string = this.singInForm.get('email')?.value;
    const password: string = this.singInForm.get('password')?.value;
    this.authService.signIn(email, password);
  }

}
