import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, throwError } from 'rxjs';
import { IUniversity } from 'src/app/models/university.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class UniversityService {
  constructor(private http: HttpClient) {}

  getUniversities() {
    return this.http
      .get<IUniversity[]>(environment.API_ENDPOINT + '/universities')
      .pipe(catchError(this.handleError));
  }

  getUniversitiesShortName() {
    return this.http
      .get<{ id: number; shortName: string }[]>(
        environment.API_ENDPOINT + '/universities/shortnames'
      )
      .pipe(catchError(this.handleError));
  }

  getUniversity(universityId: string) {
    return this.http
      .get<IUniversity>(
        environment.API_ENDPOINT + '/universities/' + universityId
      )
      .pipe(catchError(this.handleError));
  }

  createUniversity(university: IUniversity) {
    return this.http
      .post<IUniversity>(environment.API_ENDPOINT + '/universities', university)
      .pipe(catchError(this.handleError));
  }

  updateUniversity(university: IUniversity) {
    return this.http
      .put<IUniversity>(
        environment.API_ENDPOINT + '/universities/' + university.id,
        university
      )
      .pipe(catchError(this.handleError));
  }

  deleteUniversity(universityId: number) {
    return this.http
      .delete<IUniversity>(
        environment.API_ENDPOINT + '/universities/' + universityId
      )
      .pipe(catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse) {
    let errorMessage = 'An unknown error occurred!';

    if (!error.error || !error.error.error) {
      return throwError(() => new Error(errorMessage));
    }

    switch (error.error.error.message) {
      case 'UNIVERSITY_NOT_FOUND':
        errorMessage = 'University not found!';
        break;
    }

    return throwError(() => new Error(errorMessage));
  }
}
