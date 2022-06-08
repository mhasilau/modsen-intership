import { Component, OnInit } from '@angular/core';
import { noAvatarURL } from '../../../../api/api.config';// TODO: Use alias.
import { UserApiService } from '../../../services/user-api.service';// TODO: Use alias.
import { AvatarService } from '../../../services/avatar.service';// TODO: Use alias.

@Component({
  selector: 'app-user-avatar',
  templateUrl: './user-avatar.component.html',
  styleUrls: ['./user-avatar.component.scss'],
})
export class UserAvatarComponent implements OnInit{
  userAvatar: string = noAvatarURL;
  uid: number | undefined;
  constructor(private userApiService: UserApiService, private avatarService: AvatarService) {}

  ngOnInit(): void {
    this.userApiService.user$.subscribe(value => this.uid = value?.id); // TODO communicate subscribes
    this.avatarService.getUserAvatar().subscribe(users => {
      const userLogin = users.find(user => user.id === this.uid);
      this.userAvatar = userLogin!.avatar;
    });
  };
}
