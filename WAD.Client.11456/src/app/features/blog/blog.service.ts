import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { IBlog } from 'src/app/models/blog.model';
import { environment } from 'src/environments/environment';
import { catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BlogService {
  constructor(private http: HttpClient) {}

  getBlogs() {
    return this.http
      .get<IBlog[]>(environment.API_ENDPOINT + '/blogs')
      .pipe(catchError(this.handleError));
  }

  getBlog(id: number) {
    return this.http
      .get<IBlog>(environment.API_ENDPOINT + '/blogs/' + id)
      .pipe(catchError(this.handleError));
  }

  createBlog(blog: Omit<IBlog, 'university'> & { university: { id: number } }) {
    return this.http
      .post<IBlog>(environment.API_ENDPOINT + '/blogs', blog)
      .pipe(catchError(this.handleError));
  }

  updateBlog(blog: Omit<IBlog, 'university'> & { university: { id: number } }) {
    return this.http
      .put<IBlog>(environment.API_ENDPOINT + '/blogs/' + blog.id, blog)
      .pipe(catchError(this.handleError));
  }

  deleteBlog(id: number) {
    return this.http
      .delete<IBlog>(environment.API_ENDPOINT + '/blogs/' + id)
      .pipe(catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse) {
    let errorMessage = 'An unknown error occurred!';

    if (!error.error || !error.error.error) {
      return throwError(() => new Error(errorMessage));
    }

    switch (error.error.error.message) {
      case 'BLOG_NOT_FOUND':
        errorMessage = 'Blog not found!';
        break;
    }

    return throwError(() => new Error(errorMessage));
  }
}
