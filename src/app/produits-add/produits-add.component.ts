import { Component, OnInit } from '@angular/core';
import { FormControl,NgForm,FormGroup ,FormBuilder , Validators } from '@angular/forms';

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

    formData = this.fb.group({
      name: ['',Validators.required],
      price: ['',Validators.required],
      quantity: ['',Validators.required]
    })

  constructor(private categoryService: CategoriesService,
              private produitService: ProduitsService ,
              private fb: FormBuilder       
      ) { }

  ngOnInit(): void {
    this.categoryService.getCategorys()
      .subscribe(response =>{
        console.log('response Cat :',response)
        this.categories = response._embedded.categories;
      })
  }

  onSubmit(form: NgForm) {

    this.produitService.addProduit(form)
    .subscribe(
      (res) => {
        console.log("cool ok",res)
      }, (err) => {
        console.log(err);

      });

  }
  testClick(){
    console.log(this.formData.value)
    
  }

}
