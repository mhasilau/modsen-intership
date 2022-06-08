import { Component, OnInit } from '@angular/core';
import { UserApiService } from '../../../services/user-api.service';
import { IUser } from '../../../../interfaces/user.interface';

@Component({
  selector: 'app-user-self',
  templateUrl: './user-self.component.html',
  styleUrls: ['./user-self.component.scss'],
})
export class UserSelfComponent implements OnInit{
  constructor(private userApiService: UserApiService) {}
  user: IUser | null | undefined;

  ngOnInit(): void {
    this.userApiService.user$.subscribe(value => this.user = value);
  };
}


