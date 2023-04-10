import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Product1Component } from './product1/product1.component';
import { Product2Component } from './product2/product2.component';
import { Product3Component } from './product3/product3.component';

const routes: Routes = [
  {
    path:'product1link',component:Product1Component
  },
  {
    path:'product2link',component:Product2Component
  },
  {
    path:'product3link',component:Product3Component
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
