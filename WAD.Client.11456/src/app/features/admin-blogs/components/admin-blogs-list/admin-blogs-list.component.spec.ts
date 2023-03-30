import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminBlogsListComponent } from './admin-blogs-list.component';

describe('AdminBlogsListComponent', () => {
  let component: AdminBlogsListComponent;
  let fixture: ComponentFixture<AdminBlogsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminBlogsListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminBlogsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
