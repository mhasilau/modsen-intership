import { Component, OnInit } from '@angular/core';
import { IUser } from '@app/interfaces';
import { UserService } from '@core/services';

@Component({
  selector: 'app-user-self',
  templateUrl: './user-self.component.html',
  styleUrls: ['./user-self.component.scss'],
})
export class UserSelfComponent implements OnInit{
  constructor(private userService: UserService) {}
  user: IUser | null | undefined;

  ngOnInit(): void {
    this.userService.user$.subscribe(value => this.user = value);
  };
}


