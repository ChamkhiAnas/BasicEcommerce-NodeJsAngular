import { ProductsService } from './../../../services/products.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.css']
})
export class ListProductsComponent implements OnInit {

  products:any[]=[];

  constructor(private productService:ProductsService) { }

  ngOnInit():void{
    this.productService.getAll()
        .subscribe((res:any[])=>{
          this.products=res['data'];
        })

  }

  

}
