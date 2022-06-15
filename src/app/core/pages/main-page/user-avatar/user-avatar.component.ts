import { Component, OnInit } from '@angular/core';
import { AvatarService, UserApiService } from '@core/services';
import { noAvatarURL } from '@app/api';

@Component({
  selector: 'app-user-avatar',
  templateUrl: './user-avatar.component.html',
  styleUrls: ['./user-avatar.component.scss'],
})
export class UserAvatarComponent implements OnInit{
  constructor(
    private userApiService: UserApiService,
    private avatarService: AvatarService
  ) {}
  uid: number | undefined;
  userAvatar: string = noAvatarURL;

  ngOnInit(): void {
    this.userApiService.user$.subscribe(value => this.uid = value?.id); // TODO communicate subscribes
    this.avatarService.getUserAvatar().subscribe(users => {
      const userLogin = users.find(user => user.id === this.uid);
      this.userAvatar = userLogin!.avatar;
    });
  };
}
