import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';
import { BlogService } from 'src/app/features/blog/blog.service';
import { UniversityService } from 'src/app/features/university/university.service';
import { IBlog } from 'src/app/models/blog.model';

@Component({
  selector: 'app-create-blog-modal',
  templateUrl: './create-blog-modal.component.html',
  styleUrls: ['./create-blog-modal.component.scss'],
})
export class CreateBlogModalComponent implements OnInit {
  @Output() modalClosed = new EventEmitter<void>();
  uniShortNames$!: Observable<{ id: number; shortName: string }[]>;

  blog: Omit<IBlog, 'university'> & {
    university: {
      id: number;
    };
  } = {
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
  }

  onSubmit(form: NgForm) {
    if (!form.valid) {
      return;
    }

    this.blog.university.id = Number(this.blog.university.id);

    this.blogService.createBlog(this.blog).subscribe(
      resData => {
        this.modalClosed.emit();
        location.reload();
      },
      (errorMessage: any) => {
        console.error(errorMessage);
      }
    );
  }
}
