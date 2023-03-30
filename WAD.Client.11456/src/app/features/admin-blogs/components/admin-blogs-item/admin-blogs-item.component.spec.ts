import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminBlogsItemComponent } from './admin-blogs-item.component';

describe('AdminBlogsItemComponent', () => {
  let component: AdminBlogsItemComponent;
  let fixture: ComponentFixture<AdminBlogsItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminBlogsItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminBlogsItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
