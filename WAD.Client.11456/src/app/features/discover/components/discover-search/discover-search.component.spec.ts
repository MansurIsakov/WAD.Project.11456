import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiscoverSearchComponent } from './discover-search.component';

describe('DiscoverSearchComponent', () => {
  let component: DiscoverSearchComponent;
  let fixture: ComponentFixture<DiscoverSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiscoverSearchComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DiscoverSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
