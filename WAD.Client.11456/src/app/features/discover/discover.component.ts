import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IUniversity } from 'src/app/models/university.model';
import { UniversityService } from '../university/university.service';

@Component({
  selector: 'app-discover',
  templateUrl: './discover.component.html',
  styleUrls: ['./discover.component.scss'],
})
export class DiscoverComponent implements OnInit {
  universitiesList$!: Observable<IUniversity[]>;
  searchValue: string = '';

  constructor(private universityService: UniversityService) {}

  ngOnInit(): void {
    this.universitiesList$ = this.universityService.getUniversities();
  }

  onSearchHandler(searchValue: string): void {
    this.searchValue = searchValue;
  }
}
