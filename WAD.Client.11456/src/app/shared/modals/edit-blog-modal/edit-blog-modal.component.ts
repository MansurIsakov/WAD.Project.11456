import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';
import { BlogService } from 'src/app/features/blog/blog.service';
import { UniversityService } from 'src/app/features/university/university.service';
import { IBlog } from 'src/app/models/blog.model';

@Component({
  selector: 'app-edit-blog-modal',
  templateUrl: './edit-blog-modal.component.html',
  styleUrls: ['./edit-blog-modal.component.scss'],
})
export class EditBlogModalComponent implements OnInit {
  @Output() modalClosed = new EventEmitter<void>();
  @Input() incomingBlog!: IBlog | null;
  uniShortNames$!: Observable<{ id: number; shortName: string }[]>;

  blog: Omit<IBlog, 'university'> & {
    university: {
      id: number;
    };
  } = {
    id: 0,
    title: '',
    coverImage: '',
    author: '',
    content: '',
    createdAt: String(new Date()),
    likeCount: 0,
    university: {
      id: 0,
    },
  };

  constructor(
    private blogService: BlogService,
    private universityService: UniversityService
  ) {}

  ngOnInit(): void {
    this.uniShortNames$ = this.universityService.getUniversitiesShortName();

    this.blog = {
      id: this.incomingBlog?.id ?? 0,
      title: this.incomingBlog?.title ?? '',
      coverImage: this.incomingBlog?.coverImage ?? '',
      author: this.incomingBlog?.author ?? '',
      content: this.incomingBlog?.content ?? '',
      createdAt: this.incomingBlog?.createdAt ?? String(new Date()),
      likeCount: this.incomingBlog?.likeCount ?? 0,
      university: {
        id: this.incomingBlog?.university?.id ?? 0,
      },
    };
  }

  onSubmit(form: NgForm) {
    if (!form.valid) {
      return;
    }

    this.blog.university.id = Number(this.blog.university.id);

    this.blogService.updateBlog(this.blog).subscribe(
      resData => {
        this.modalClosed.emit();
        location.reload();
      },
      (errorMessage: any) => {
        console.error(errorMessage);
      }
    );
  }

  deleteBlog(blogId: number | undefined) {
    if (blogId) {
      this.blogService.deleteBlog(blogId).subscribe(resData => {
        location.reload();
      });
    }
  }
}
