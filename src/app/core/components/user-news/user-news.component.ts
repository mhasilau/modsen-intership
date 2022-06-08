import { Component, OnInit } from '@angular/core';
import { UserApiService } from '../../services/user-api.service'; // TODO: Use alias
import { PostsService } from '../../services/posts.service'; // TODO: Use alias
import { Router } from '@angular/router';
import { IPost } from '../../../interfaces/posts-interface'; // TODO: Use alias

@Component({ // TODO: Why this component in the core?
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
  user: any; // TODO: Don't use any
  postsNews:IPost[] = []; // TODO: Code style
  postsSelf:IPost[] = []; // TODO: Code style

  ngOnInit(): void { // TODO: Need to refactor. Combine subscribes
    this.userApiService.user$.subscribe(value => this.user = value);
    this.postsService.getPosts().subscribe(posts => {
      switch (this.router.url) {
        case '/user/news':
          this.postsNews = posts.filter(post => post.userId !== this.user.id);
          break;
        case '/user/self':
          this.postsSelf = posts.filter(post => post.userId === this.user.id);
          break;
      }
    });
  };
}
