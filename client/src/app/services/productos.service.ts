import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Product} from '../models/product';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  API_URI ='http://localhost:5000'

  constructor(private http:HttpClient) { }
  
  getProducts(){
    return this.http.get(`${this.API_URI}/products`);
  }

  getProductsUser(id:number){
    return this.http.get(`${this.API_URI}/getProductUser/${id}`);
  }
  deleteProduct(id:string){
    return this.http.get(`${this.API_URI}/deleteProduct/${id}`);
  }
  saveProduct(product:Product){
    return this.http.post(`${this.API_URI}/createProduct`,product);
  }

  updateProduct(id:string|number,updateProduct:Product) {
    return this.http.post(`${this.API_URI}/updateProduct/${id}`,updateProduct);

  }
}
