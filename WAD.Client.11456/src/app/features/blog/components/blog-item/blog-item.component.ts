import { Component, Input } from '@angular/core';
import { IBlog } from 'src/app/models/blog.model';

@Component({
  selector: 'app-blog-item',
  templateUrl: './blog-item.component.html',
  styleUrls: ['./blog-item.component.scss'],
})
export class BlogItemComponent {
  @Input() blogPost!: IBlog;
}
