import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainCategoryListComponent } from './main-category-list.component';

describe('MainCategoryListComponent', () => {
  let component: MainCategoryListComponent;
  let fixture: ComponentFixture<MainCategoryListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MainCategoryListComponent]
    });
    fixture = TestBed.createComponent(MainCategoryListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
