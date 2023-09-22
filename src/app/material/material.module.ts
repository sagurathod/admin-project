import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatListModule} from '@angular/material/list';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatDialogModule} from '@angular/material/dialog';



const materialComp  = [
  MatButtonModule,
  MatSidenavModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatToolbarModule,
  MatListModule,
  MatTableModule,
  MatPaginatorModule,
  MatDialogModule
]



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    materialComp
  ],
  exports : [
    materialComp
  ]
})
export class MaterialModule { }
