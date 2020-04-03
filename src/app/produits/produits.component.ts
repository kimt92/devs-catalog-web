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
  constructor(private produit: ProduitsService) { }

  ngOnInit() {
    this.produit.getProduits()
      .subscribe(res =>{
        this.produits=res
        console.log( "produits :",this.produits)
      })
  }

}
