import { Component, OnInit } from '@angular/core';


import { Router } from '@angular/router';
import { Produits } from '../models/produits';
import { Category } from '../models/category';
import { FormControl,NgForm,FormGroup } from '@angular/forms';

@Component({
  selector: 'app-produits',
  templateUrl: './produits.component.html',
  styleUrls: ['./produits.component.css']
})
export class ProduitsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
