import { Component, OnInit } from '@angular/core';
import { AvatarService, UserService } from '@core/services';
import { noAvatarURL } from '@app/api';

@Component({
  selector: 'app-user-avatar',
  templateUrl: './user-avatar.component.html',
  styleUrls: ['./user-avatar.component.scss'],
})
export class UserAvatarComponent implements OnInit{
  constructor(
    private userService: UserService,
    private avatarService: AvatarService
  ) {}
  uid: number | undefined;
  userAvatar: string = noAvatarURL;

  ngOnInit(): void {
    this.userService.user$.subscribe(value => this.uid = value?.id); // TODO communicate subscribes
    this.avatarService.getUserAvatar().subscribe(users => {
      const userLogin = users.find(user => user.id === this.uid);
      this.userAvatar = userLogin!.avatar;
    });
  };
}
