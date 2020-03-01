import { Component,  OnInit, HostBinding} from '@angular/core';
import {ProductosService} from '../services/productos.service'
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { AuthenticationService } from '../authentication.service'

@Component({
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit{

  @HostBinding('class') classes='row'
  products:any=[];
  
  constructor(private productosServices:ProductosService, public auth: AuthenticationService) { }
  ngOnInit(): void {
    this.getProducts();
  }
  getProducts(){
    let id = this.auth.getUserDetails()?.id;
    console.log("Id Usuario: ", id)
    this.productosServices.getProductsUser(id).subscribe(
      res=> {
        this.products=res;
      },
      err=>console.error(err)
    )
  }
  deleteProduct(id:string){
    console.log(id)
    this.productosServices.deleteProduct(id).subscribe(
      res=>{
        this.getProducts();
        console.log(res)
      },
      err=>console.error(err)
    )
  }
  editProduct(id:string){
    console.log(id);

  }
}