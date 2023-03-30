import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IBlog } from 'src/app/models/blog.model';

@Component({
  selector: 'app-admin-blogs-item',
  templateUrl: './admin-blogs-item.component.html',
  styleUrls: ['./admin-blogs-item.component.scss'],
})
export class AdminBlogsItemComponent {
  @Input() blog!: IBlog;
  @Output() edit = new EventEmitter<IBlog>();
}
