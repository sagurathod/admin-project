import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMainCategoryComponent } from './add-main-category.component';

describe('AddMainCategoryComponent', () => {
  let component: AddMainCategoryComponent;
  let fixture: ComponentFixture<AddMainCategoryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddMainCategoryComponent]
    });
    fixture = TestBed.createComponent(AddMainCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
