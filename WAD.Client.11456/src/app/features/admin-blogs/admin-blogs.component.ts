import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IBlog } from 'src/app/models/blog.model';
import { BlogService } from '../blog/blog.service';

@Component({
  selector: 'app-admin-blogs',
  templateUrl: './admin-blogs.component.html',
  styleUrls: ['./admin-blogs.component.scss'],
})
export class AdminBlogsComponent implements OnInit {
  blogs$!: Observable<IBlog[]>;

  constructor(private blogService: BlogService) {}

  ngOnInit(): void {
    this.blogs$ = this.blogService.getBlogs();
  }
}
