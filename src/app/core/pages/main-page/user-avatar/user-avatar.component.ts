import { Component } from '@angular/core';
import { noAvatarURL } from '../../../../api/api.config';

@Component({
  selector: 'app-user-avatar',
  templateUrl: './user-avatar.component.html',
  styleUrls: ['./user-avatar.component.scss'],
})
export class UserAvatarComponent {
  userAvatar = noAvatarURL;
}
