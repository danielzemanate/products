import { Component,  OnInit} from '@angular/core';
import {ProductosService} from '../services/productos.service'
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit{

  products:any=[];
  
  constructor(private productosServices:ProductosService) { }
  ngOnInit(): void {
    this.productosServices.getProducts().subscribe(
      res=> {
        this.products=res;
      },
      err=>console.error(err)
    )
  }
}