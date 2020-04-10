import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { Produits } from '../models/produits';
import { Category } from '../models/category';
import { ProduitsService } from '../services/produits.service';
import { FormControl,NgForm,FormGroup } from '@angular/forms';

@Component({
  selector: 'app-produits',
  templateUrl: './produits.component.html',
  styleUrls: ['./produits.component.css']
})
export class ProduitsComponent implements OnInit {
  produits:Produits[]=[]

  constructor(private produitServics: ProduitsService) { }

  ngOnInit() {
    this.produitServics.getProduits()
      .subscribe(
        (res) =>{
          this.produits = res._embedded.products;
          console.log( "produits :",this.produits)
        },(err)=>{
          console.error(err);
        }
      );
  }
  
  getProduitById(id: number) {
    return this.produitServics.getProduit(id)
      .subscribe(
        (res)=>{
          console.log("getProduitById",res);
        },
        (err)=>{
          console.error(err);
        }
      )
  }

}
