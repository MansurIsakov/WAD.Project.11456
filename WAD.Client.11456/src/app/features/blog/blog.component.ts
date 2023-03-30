import { Component, OnDestroy, OnInit } from '@angular/core';
import type { IBlog } from 'src/app/models/blog.model';
import { Observable, Subscription } from 'rxjs';
import { BlogService } from './blog.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss'],
})
export class BlogComponent implements OnInit, OnDestroy {
  blogs: IBlog[] = [];
  sub!: Subscription;
  filterValue: string = '';

  constructor(private blogService: BlogService) {}

  ngOnInit() {
    this.sub = this.blogService.getBlogs().subscribe(blogs => {
      this.blogs = blogs;
    });
  }

  filterByUni(uni: string) {
    this.filterValue = uni;
  }

  ngOnDestroy() {
    if (this.sub) {
      this.sub.unsubscribe();
    }
  }
}
