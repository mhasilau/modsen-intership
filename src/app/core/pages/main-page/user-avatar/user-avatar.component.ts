import { Component, OnDestroy, OnInit } from '@angular/core';
import { AuthService, AvatarService } from '@core/services';
import { noAvatarURL } from '@app/api';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-user-avatar',
  templateUrl: './user-avatar.component.html',
  styleUrls: ['./user-avatar.component.scss'],
})
export class UserAvatarComponent implements OnInit, OnDestroy {

  userAvatar!: string | null;
  private destroy$ = new Subject<void>();

  constructor(
    private avatarService: AvatarService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.avatarService.getUserAvatar(this.authService.token$.value).pipe(takeUntil(this.destroy$)).subscribe(avatar => avatar ? this.userAvatar = avatar : this.userAvatar = noAvatarURL);
  };

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
