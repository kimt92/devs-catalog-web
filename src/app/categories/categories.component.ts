import { Component, OnInit } from '@angular/core';
import { Category } from '../models/category';
import { CategoriesService } from '../services/categories.service';
@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  category:Category[] = []
  catLink:Category[] = []
  catPage:Category[] = []

  constructor(private categories: CategoriesService) { }

  ngOnInit() {
    this.categories.getCategorys()
      .subscribe(res =>{
        this.category = res._embedded.categories;
        this.catLink=res._link;
        this.catPage = res.page;
        console.log('category:', this.category)
      } )
  }

}
