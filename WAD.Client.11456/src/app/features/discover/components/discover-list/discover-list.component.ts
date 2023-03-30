import { Component, Input } from '@angular/core';
import { IUniversity } from 'src/app/models/university.model';

@Component({
  selector: 'app-discover-list',
  templateUrl: './discover-list.component.html',
  styleUrls: ['./discover-list.component.scss'],
})
export class DiscoverListComponent {
  @Input() universitiesList!: IUniversity[] | null;
}
