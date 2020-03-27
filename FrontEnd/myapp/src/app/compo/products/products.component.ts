import { Component, OnInit } from '@angular/core';
import {ProductsService} from './../../services/products.service'

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor(private productsService:ProductsService) { }

  // products=[];

  ngOnInit() {
    this.getAllProducts();
  }

  getAllProducts(){
    this.productsService.getAll()
        .subscribe(res=>console.log(res));
  }

}
