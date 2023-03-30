import { Component, Input } from '@angular/core';
import { IUniversity } from 'src/app/models/university.model';

@Component({
  selector: 'app-university-info',
  templateUrl: './university-info.component.html',
  styleUrls: ['./university-info.component.scss'],
})
export class UniversityInfoComponent {
  @Input() university!: IUniversity;

  activeTab: string = 'about';

  setActiveTab(tab: string) {
    this.activeTab = tab;
  }
}
