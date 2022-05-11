import { Component, OnInit } from '@angular/core';
import { noAvatarURL } from '../../../../api/api.config';
import { UserApiService } from '../../../services/user-api.service';
import { AvatarService } from '../../../services/avatar.service';
// import { IUserSignIn } from '../../../../interfaces/user.interface';

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
    console.log('ava');
    this.userApiService.user$.subscribe(value => this.uid = value?.id); // TODO communicate subscribes
    console.log(this.uid);
    this.avatarService.getUserAvatar().subscribe(users => {
      const userLogin = users.find(user => user.id === this.uid);
      this.userAvatar = userLogin!.avatar;
    });
  };
}
