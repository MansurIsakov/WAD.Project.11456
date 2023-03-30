import { Component, Input } from '@angular/core';
import { IBlog } from 'src/app/models/blog.model';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.scss'],
})
export class BlogListComponent {
  @Input() blogPosts!: IBlog[];
  page: number = 1;

  startIndex(): number {
    return (this.page - 1) * 4;
  }

  endIndex(): number {
    return this.page * 4;
  }

  hasNextPage(): boolean {
    return this.endIndex() < this.blogPosts.length;
  }

  paginatedBlogsList(): IBlog[] {
    return this.blogPosts.slice(this.startIndex(), this.endIndex());
  }
}
