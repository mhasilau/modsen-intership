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
    console.log('news');
    this.userApiService.user$.subscribe(value => this.user = value);
    console.log(this.user);
    this.postsService.getPosts().subscribe(posts => {
      switch (this.router.url) {
        case '/user/news':
          posts.forEach((post) => { // TODO filter
            if (post.userId !== this.user.id) {
              this.postsNews.push(post);
            }
          });
          break;
        case '/user/self':
          posts.forEach((post) => { // TODO filter
            if (post.userId === this.user.id) {
              this.postsSelf.push(post);
            }
          });
          break;
      }
    });
    console.log(this.router.url);
  };


}
