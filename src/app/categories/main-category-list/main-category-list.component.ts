import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { AddMainCategoryComponent } from '../add-main-category/add-main-category.component';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-main-category-list',
  templateUrl: './main-category-list.component.html',
  styleUrls: ['./main-category-list.component.scss']
})
export class MainCategoryListComponent implements AfterViewInit {
  displayedColumns: string[] = ['categoryName', 'description', 'createdAt', 'action'];
  dataSource: MatTableDataSource<Category> = new MatTableDataSource<Category>([]);

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  categoryList : Category [] = [
    {categoryName : "Electronics", description : "Electronics Products", createdAt : "01/01/2023"},
    {categoryName : "Fashion", description : "Shirt", createdAt : "01/06/2023"},
  ]

  constructor(private dialog:MatDialog){

  }

  ngOnInit(){
    this.dataSource = new MatTableDataSource(this.categoryList);
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  openDialog(){
    this.dialog.open(AddMainCategoryComponent,{
      'width':'600px'
    })
  }
}

export class Category{
  categoryName! : string;
  description! : string;
  createdAt! : string;
}