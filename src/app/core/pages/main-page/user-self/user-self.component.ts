import { Component, OnDestroy, OnInit } from '@angular/core';
import { IUser } from '@app/interfaces';
import { UserService } from '@core/services';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-user-self',
  templateUrl: './user-self.component.html',
  styleUrls: ['./user-self.component.scss'],
})
export class UserSelfComponent implements OnInit, OnDestroy {

  private destroy$ = new Subject<void>();
  user: IUser | null | undefined;

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.userService.user$.pipe(takeUntil(this.destroy$)).subscribe(value => this.user = value);
  };

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}


