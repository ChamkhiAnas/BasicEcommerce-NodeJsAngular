import { ShowProductComponent } from './components/md-product/show-product/show-product.component';
import { PageNotFoundComponent } from './components/partials/page-not-found/page-not-found.component';
import { EditProductComponent } from './components/md-product/edit-product/edit-product.component';
import { AddProductComponent } from './components/md-product/add-product/add-product.component';
import { ListProductsComponent } from './components/md-product/list-products/list-products.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListCategoriesComponent } from './components/md-category/list-categories/list-categories.component';
import { AddCategoryComponent } from './components/md-category/add-category/add-category.component';
import { EditCategoryComponent } from './components/md-category/edit-category/edit-category.component';


const routes: Routes = [

  { path: "", redirectTo: '/products', pathMatch: 'full'},

  { path: "products",children:[

    { path: "", component: ListProductsComponent},
    { path: "create", component: AddProductComponent},
    { path: ":id", component: ShowProductComponent},
    { path: ":id/edit", component: EditProductComponent},

  ]},
 
  {path:"category",children:[

    { path: "", component: ListCategoriesComponent},
    { path: "create", component: AddCategoryComponent},
    { path: ":id/edit", component: EditCategoryComponent},  

  ]},


  { path: "**", component: PageNotFoundComponent},




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
