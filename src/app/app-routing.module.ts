import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProduitsComponent } from './produits/produits.component';
import { ProduitsViewsComponent } from './produits-views/produits-views.component';
import { ProduitsEditsComponent } from './produits-edits/produits-edits.component';
import { CategoriesComponent } from './categories/categories.component';


const routes: Routes = [
  { 
    path: 'produitsList', 
    component: ProduitsComponent 
  },
  { 
    path: 'produitDetail', 
    component: ProduitsViewsComponent 
  },
  { 
    path: 'produitEdit', 
    component: ProduitsEditsComponent 
  },
  
  { 
    path: 'categorysList', 
    component: CategoriesComponent 
  },
  { 
    path: 'categoryDetail', 
    component: ProduitsViewsComponent 
  },
  { 
    path: 'categoryEdit', 
    component: ProduitsEditsComponent 
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
