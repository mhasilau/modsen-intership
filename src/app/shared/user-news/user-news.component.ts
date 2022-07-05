import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { UserService } from '@core/services';
import { PostsService } from '@core/services';
import { IPost, IUser } from '@app/interfaces';
import { filter, map, Subject, takeUntil, withLatestFrom } from 'rxjs';

@Component({
  selector: 'app-user-news',
  templateUrl: './user-news.component.html',
  styleUrls: ['./user-news.component.scss'],
})
export class UserNewsComponent implements OnInit, OnDestroy {

  private destroy$ = new Subject<void>();
  user?: IUser | null;
  postsNews?:IPost[];
  postsSelf?:IPost[];
  userName?: string[];

  constructor(
    private userService: UserService,
    private postsService: PostsService,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.postsService.getPosts().pipe(
      withLatestFrom(this.userService.user$),
      filter(([, user]) => !!user),
      map(([posts, user]) => ({
        posts,
        user: user as IUser,
      })),
      takeUntil(this.destroy$)
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

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
