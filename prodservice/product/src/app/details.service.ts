import { Injectable } from '@angular/core';
import { items } from './items';

@Injectable({
  providedIn: 'root'
})
export class DetailsService {


  productDetails!:items[];
  getDetails():items[]{
    
    this.productDetails=[
    {id:"1",itemName:"ladies watch",price:150,qty:2},
    {id:"2",itemName:"ladies hand Bag",price:200,qty:1},
    {id:"3",itemName:"ladies wallet",price:140,qty:2},
    {id:"4",itemName:"dress",price:250,qty:1},
    {id:"5",itemName:"slippers",price:180,qty:2},

  ]

  return this.productDetails
}

  constructor() { }
}
