import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IUniversity } from 'src/app/models/university.model';
import { UniversityService } from '../university/university.service';

@Component({
  selector: 'app-admin-universities',
  templateUrl: './admin-universities.component.html',
  styleUrls: ['./admin-universities.component.scss'],
})
export class AdminUniversitiesComponent implements OnInit {
  universities$!: Observable<IUniversity[]>;

  constructor(private universityService: UniversityService) {}

  ngOnInit(): void {
    this.universities$ = this.universityService.getUniversities();
  }
}
