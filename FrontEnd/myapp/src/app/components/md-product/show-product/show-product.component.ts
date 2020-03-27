import { ProductsService } from './../../../services/products.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-show-product',
  templateUrl: './show-product.component.html',
  styleUrls: ['./show-product.component.css']
})
export class ShowProductComponent implements OnInit {

  constructor( private route: ActivatedRoute,private product:ProductsService) { }

  produit=null;

  ngOnInit() {
    
    this.route.params.subscribe(params=>{

      this.product.find(params.id)
      .subscribe(res=>{
        this.produit=res['data'];
        console.log(res['data']);
        console.log(this.produit)

      })

    })


  }

}
