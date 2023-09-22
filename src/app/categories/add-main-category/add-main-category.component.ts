import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-main-category',
  templateUrl: './add-main-category.component.html',
  styleUrls: ['./add-main-category.component.scss']
})
export class AddMainCategoryComponent {
  hide = true;

  productForm! : FormGroup;

  constructor(private router:Router, private fb:FormBuilder){

  }

  ngOnInit(){

    this.form ();

  }

  form(){
    this.productForm = this.fb.group({
      "category" : [],
      "description" : [],
      "createdAt" : []
    })
  }

  // login(){

  // }

  save(){
    console.log(this.productForm.value)
  }
}
