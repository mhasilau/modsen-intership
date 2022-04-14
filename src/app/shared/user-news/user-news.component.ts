import {Component, OnInit} from '@angular/core';
import { UserApiService } from '../../core/services/user-api.service';
import { PostsService } from '../../core/services/posts.service';
import { Router } from '@angular/router';
import { IPost } from '../../interfaces/posts-interface';


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
  user: any;
  postsNews:IPost[] = [];
  postsSelf:IPost[] = [];

  ngOnInit(): void {
    this.userApiService.user$.subscribe(value => this.user = value);
    this.postsService.getPosts().subscribe(posts => {
      switch (this.router.url) {
        case '/user/news':
          this.postsNews = posts.filter(post => post.userId !== this.user.id)
          break;
        case '/user/self':
          this.postsSelf = posts.filter(post => post.userId === this.user.id)
          break;
      }
    });
  };
}
