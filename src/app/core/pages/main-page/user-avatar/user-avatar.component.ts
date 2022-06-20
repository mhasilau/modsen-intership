import { Component, OnInit } from '@angular/core';
import { AuthService, AvatarService, UserService } from '@core/services';
import { noAvatarURL } from '@app/api';

@Component({
  selector: 'app-user-avatar',
  templateUrl: './user-avatar.component.html',
  styleUrls: ['./user-avatar.component.scss'],
})
export class UserAvatarComponent implements OnInit{
  constructor(
    private userService: UserService,
    private avatarService: AvatarService,
    private authService: AuthService
  ) {}
  uid: number | undefined;
  userAvatar: string = noAvatarURL;

  ngOnInit(): void {
    this.userService.user$.subscribe(value => this.uid = value?.id); // TODO communicate subscribes
    this.avatarService.getUserAvatar(this.authService.token$.value).subscribe(avatar => this.userAvatar = avatar);
  };
}
