import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductsListComponent } from './app/products-list/products-list.component'

const routes: Routes = [
  {
    path: '',
    redirectTo: '/products',
    //pathMatch: 'full'
  },

  {
    path: 'products',
    component: ProductsListComponent
    //pathMatch: 'full'
  },

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }