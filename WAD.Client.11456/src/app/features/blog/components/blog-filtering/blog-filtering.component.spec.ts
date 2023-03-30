import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogFilteringComponent } from './blog-filtering.component';

describe('BlogFilteringComponent', () => {
  let component: BlogFilteringComponent;
  let fixture: ComponentFixture<BlogFilteringComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlogFilteringComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlogFilteringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
