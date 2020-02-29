import { Component, OnInit, HostBinding } from '@angular/core';
import { product } from '../models/product';
import{Router, ActivatedRoute} from '@angular/router'

import {ProductosService} from '../services/productos.service';


@Component({
  selector: 'app-products-form',
  templateUrl: './products-form.component.html',
  styleUrls: ['./products-form.component.scss']
})
export class ProductsFormComponent implements OnInit {

  @HostBinding ('class') classes='row';

  product : product={
    id:0,
    id_category:0,
    id_user:0,
    referencia:0,
    nombre:'',
    tipo:'',
    precio:0

  }
  constructor(private productosService:ProductosService, private router: Router, private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
   const params= this.activatedRoute.snapshot.params;
   if(params.id){
     this.productosService.getProduct(params.id)
     .subscribe(
       res=>{
        console.log(res)
        //this.product =res
       },
       err=>console.error(err)
     )
   }
  }

  saveNewProduct(){
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

}
