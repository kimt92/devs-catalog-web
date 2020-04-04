import { Component, OnInit } from '@angular/core';
import { FormControl,NgForm,FormGroup } from '@angular/forms';

import { Produits } from '../models/produits';
import { Category } from '../models/category';
import { ProduitsService } from '../services/produits.service';
import { CategoriesService } from '../services/categories.service';

@Component({
  selector: 'app-produits-add',
  templateUrl: './produits-add.component.html',
  styleUrls: ['./produits-add.component.css']
})
export class ProduitsAddComponent implements OnInit {
    categories:Category[]=[]

  constructor(private categoryService: CategoriesService,
              private produitService: ProduitsService        
      ) { }

  ngOnInit(): void {
    this.categoryService.getCategorys()
      .subscribe(response =>{
        console.log('response Cat :',response )
        this.categories = response._embedded.categories;
      })
  }

  onSubmit(form: NgForm) {
    this.produitService.addProduit(form)
    .subscribe(
      (res) => {
      console.log("response onSubmit",res)
      }, 
      (err) => {
        console.log(err);

      });

    // console.log(form);
  }

}
