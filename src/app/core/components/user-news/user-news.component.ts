import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { UserApiService } from '@core/services';
import { PostsService } from '@core/services';
import { IPost, IUser } from '@app/interfaces';

@Component({ // TODO rebase news to shared
  selector: 'app-user-news',
  templateUrl: './user-news.component.html',
  styleUrls: ['./user-news.component.scss'],
})
export class UserNewsComponent implements OnInit{
  constructor(
    private userApiService: UserApiService,
    private postsService: PostsService,
    private router: Router,
  ) {}

  user?: IUser | null;
  postsNews?:IPost[]; // TODO: Code style
  postsSelf?:IPost[]; // TODO: Code style

  ngOnInit(): void { // TODO: Need to refactor. Combine subscribes
    this.userApiService.user$.subscribe(value => this.user = value);
    this.postsService.getPosts().subscribe(posts => {
      switch (this.router.url) {
        case '/user/news':
          this.postsNews = posts.filter(post => post.userId !== this.user?.id);
          break;
        case '/user/self':
          this.postsSelf = posts.filter(post => post.userId === this.user?.id);
          break;
      }
    });
  };
}
