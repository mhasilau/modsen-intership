import { Component, OnInit } from '@angular/core';
import { UserApiService } from '../../../services/user-api.service';

@Component({
  selector: 'app-user-self',
  templateUrl: './user-self.component.html',
  styleUrls: ['./user-self.component.scss'],
})
export class UserSelfComponent implements OnInit{
  constructor(private userApiService: UserApiService) {}
  user: any;

  ngOnInit(): void {
    console.log('self');
    this.userApiService.user$.subscribe(value => this.user = value);
  };
}


