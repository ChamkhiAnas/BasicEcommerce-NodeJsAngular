import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders,HttpParams } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  urlApi:string;


   httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/x-www-form-urlencoded'
    })};
  

  constructor(private http:HttpClient) {
    this.urlApi="http://localhost:5000/products"
    
   }

  getAll() {
    return this.http.get(this.urlApi);
  }
 
  find(id: number) {
    return this.http.get(`${this.urlApi}/${id}`);
  }

  edit(id:number,data){
    return this.http.put(`${this.urlApi}/${id}`,data);
  }

  Persist(data){
    return this.http.post(this.urlApi,data);

  }
  
 

}
