import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProduitsComponent } from './produits/produits.component';
import { ProduitsViewsComponent } from './produits-views/produits-views.component';
import { ProduitsEditsComponent } from './produits-edits/produits-edits.component';
import { ProduitsAddComponent } from './produits-add/produits-add.component';
import { CategoriesComponent } from './categories/categories.component';
import { CategoriesAddComponent } from './categories-add/categories-add.component';
import { CategoriesEditComponent } from './categories-edit/categories-edit.component';
import { CategoriesViewsComponent } from './categories-views/categories-views.component';

@NgModule({
  declarations: [
    AppComponent,
    ProduitsComponent,
    ProduitsViewsComponent,
    ProduitsEditsComponent,
    ProduitsAddComponent,
    CategoriesComponent,
    CategoriesAddComponent,
    CategoriesEditComponent,
    CategoriesViewsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
