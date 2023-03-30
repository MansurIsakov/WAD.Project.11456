import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IUniversity } from 'src/app/models/university.model';
import { UniversityService } from './university.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-university',
  templateUrl: './university.component.html',
  styleUrls: ['./university.component.scss'],
})
export class UniversityComponent implements OnInit {
  university$!: Observable<IUniversity>;
  universityId: string = '';

  constructor(
    private universityService: UniversityService,
    private route: ActivatedRoute
  ) {
    this.universityId = this.route.snapshot.params['id'];
  }

  ngOnInit(): void {
    this.university$ = this.universityService.getUniversity(this.universityId);
  }
}
