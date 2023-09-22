import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoriesRoutingModule } from './categories-routing.module';
import { CategoriesComponent } from './categories.component';
import { MainCategoryListComponent } from './main-category-list/main-category-list.component';
import { MaterialModule } from '../material/material.module';
import { AddMainCategoryComponent } from './add-main-category/add-main-category.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CategoriesComponent,
    MainCategoryListComponent,
    AddMainCategoryComponent
  ],
  imports: [
    CommonModule,
    CategoriesRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class CategoriesModule { }
