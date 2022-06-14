import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { UserApiService } from '@core/services';
import { PostsService } from '@core/services';
import { IPost, IUser } from '@app/interfaces';
import { filter, map, withLatestFrom } from 'rxjs';

@Component({
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
  postsNews?:IPost[];
  postsSelf?:IPost[];
  userName?: string[];

  ngOnInit(): void {
    this.postsService.getPosts().pipe(
      withLatestFrom(this.userApiService.user$),
      filter(([, user]) => !!user),
      map(([posts, user]) => ({
        posts,
        user: user as IUser,
      })),
    ).subscribe(({ posts, user }) => {
      switch (this.router.url) {
        case '/user/news':
          this.postsNews = posts.filter(post => post.userId !== user.id);
          break;
        case '/user/self':
          this.postsSelf = posts.filter(post => post.userId === user.id);
          break;
      }
    });
  };
}
