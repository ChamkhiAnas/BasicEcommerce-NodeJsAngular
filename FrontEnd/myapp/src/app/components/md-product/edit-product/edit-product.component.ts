import { ProductsService } from './../../../services/products.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {

  constructor(private route:ActivatedRoute,private products:ProductsService) { }

  id:number;

  finaldata:{

  }

  title;
  description;
  urlImage;
  price;
  categoryId;

  values=[];






  




  ngOnInit() {

    
   

    console.log("hello world")

    this.route.params.subscribe(params=>{
      this.id=params.id;
    })

    
    this.products.find(this.id)
    .subscribe(kik=>{
      this.title=kik['data'].title
      this.price=kik['data'].price
      this.description=kik['data'].description
      this.categoryId=kik['data'].categoryId
      this.urlImage=kik['data'].urlImage
      console.log("end of subscribe")
      console.log("title",this.title)

    })


}

 club="hhhh";
 


datas = new FormGroup({
  title: new FormControl(this.club),
  description: new FormControl("description"),
  urlImage: new FormControl(),
  price: new FormControl(),
  categoryId:new FormControl()
})


editProduct(){



  this.finaldata={

    title:((this.datas.value)['title']),
    description:((this.datas.value)['description']),
    urlImage:((this.datas.value)['urlImage']),
    price:((this.datas.value)['price']),
    categoryId:(parseInt(((this.datas.value)['categoryId'])))
  }

  console.log(this.finaldata)
 
  this.products.edit(this.id,this.finaldata)
  .subscribe(res=>{
    console.log(res);
    console.log(this.finaldata)
  })
  console.log(this.finaldata)
  console.log("hada howa id",this.id)

}


}