import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProduitsComponent } from './produits/produits.component';
import { ProduitsViewsComponent } from './produits-views/produits-views.component';
import { ProduitsEditsComponent } from './produits-edits/produits-edits.component';
import { CategoriesComponent } from './categories/categories.component';
import { CategoriesAddComponent } from './categories-add/categories-add.component';
import { ProduitsAddComponent } from './produits-add/produits-add.component';


const routes: Routes = [
  // produit
  { path: 'produits/list', component: ProduitsComponent  },
  { path: 'produit/add', component: ProduitsAddComponent },
  // category
  { path: 'categories/list', component: CategoriesComponent },
  { path: 'category/add', component: CategoriesAddComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
