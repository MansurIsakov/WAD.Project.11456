import { Component, OnInit } from '@angular/core';
import { IBlog } from 'src/app/models/blog.model';
import { BlogService } from '../blog/blog.service';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
})
export class PostComponent implements OnInit {
  blog$!: Observable<IBlog>;
  userId!: number;

  constructor(private blogService: BlogService, private route: ActivatedRoute) {
    this.userId = this.route.snapshot.params['id'];
  }

  ngOnInit() {
    this.blog$ = this.blogService.getBlog(this.userId);
  }
}
