import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { UniversityService } from 'src/app/features/university/university.service';

@Component({
  selector: 'app-blog-filtering',
  templateUrl: './blog-filtering.component.html',
  styleUrls: ['./blog-filtering.component.scss'],
})
export class BlogFilteringComponent implements OnInit {
  @Output() onFilterByUni = new EventEmitter<string>();

  unisShortNames$!: Observable<{ id: number; shortName: string }[]>;
  selectedUniShortName: string = '';

  constructor(private universityService: UniversityService) {}

  ngOnInit(): void {
    this.unisShortNames$ = this.universityService.getUniversitiesShortName();
  }

  filterByUni(uni: string): void {
    if (this.selectedUniShortName === uni) {
      this.selectedUniShortName = '';
    } else {
      this.selectedUniShortName = uni;
    }
    this.onFilterByUni.emit(this.selectedUniShortName);
  }
}
