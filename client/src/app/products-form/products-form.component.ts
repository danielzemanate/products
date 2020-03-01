import { Component, OnInit, HostBinding } from '@angular/core';
import { Product } from '../models/product';
import{Router, ActivatedRoute} from '@angular/router'

import {ProductosService} from '../services/productos.service';
import { AuthenticationService } from '../authentication.service'


@Component({
  selector: 'app-products-form',
  templateUrl: './products-form.component.html',
  styleUrls: ['./products-form.component.scss']
})
export class ProductsFormComponent implements OnInit {

  @HostBinding ('class') classes='row';

  product : Product={
    id:0,
    id_category: null,
    id_user: null,
    referencia: null,
    nombre:'',
    tipo:'',
    precio: null
  };

  edit:boolean= false;


  constructor(
    private productosService:ProductosService, 
    private router: Router, 
    private activatedRoute:ActivatedRoute,
    public auth: AuthenticationService) { }

  ngOnInit(): void {
   const params= this.activatedRoute.snapshot.params;
   if(params.id){
     this.productosService.getProduct(params.id)
     .subscribe(
       res=>{
        console.log(res)
        var response = res[0];
        this.edit=true
        this.product = response;
       },
       err=>console.error(err)
     )
   }
  }

  saveNewProduct(){

    this.product.id_user = this.auth.getUserDetails()?.id;
    this.productosService.saveProduct(this.product)
    .subscribe(
      res=>{
        console.log(res)
        this.router.navigate(['/']);

      },
      err=>console.error(err)
    )
   // console.log(this.product)
  }

  updateProduct(){
    this.productosService.updateProduct(this.product.id,this.product)
    .subscribe(
      res=>{
        console.log(res)
        this.router.navigate(['/']);
      },
      err=>console.error(err)
    )
    console.log(this.product)
  }

}
