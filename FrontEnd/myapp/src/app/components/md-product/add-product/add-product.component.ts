import { ProductsService } from './../../../services/products.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  constructor(private products:ProductsService) { }
  
  finaldata:{

  }

  datas = new FormGroup({
    title: new FormControl(),
    description: new FormControl(),
    urlImage: new FormControl(),
    price: new FormControl(),
    categoryId:new FormControl()
  })

  ngOnInit() {
  }

  AddProduct(){
  
  this.finaldata={

    title:((this.datas.value)['title']),
    description:((this.datas.value)['description']),
    urlImage:((this.datas.value)['urlImage']),
    price:((this.datas.value)['price']),
    categoryId:(parseInt(((this.datas.value)['categoryId'])))
  
  }

  this.products.Persist(this.finaldata)
  .subscribe(res=>{
    console.log(res)
  })
  }


}
