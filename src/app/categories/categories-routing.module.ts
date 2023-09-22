import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriesComponent } from './categories.component';
import { MainCategoryListComponent } from './main-category-list/main-category-list.component';
import { AddMainCategoryComponent } from './add-main-category/add-main-category.component';

const routes: Routes = [
  {path: '', component: CategoriesComponent},
  {path: 'main-category', component:MainCategoryListComponent},
  {path: 'add-main-category', component:AddMainCategoryComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoriesRoutingModule { }
