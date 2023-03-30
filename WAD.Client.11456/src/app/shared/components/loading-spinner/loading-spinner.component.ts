import { Component } from '@angular/core';
import { LoaderService } from './loading-spinner.service';

@Component({
  selector: 'app-loading-spinner',
  templateUrl: './loading-spinner.component.html',
  styleUrls: ['./loading-spinner.component.scss'],
})
export class LoadingSpinnerComponent {
  isLoading$ = this.loaderService.isLoading$;

  constructor(private readonly loaderService: LoaderService) {}
}
