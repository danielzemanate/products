import { Component, OnInit } from '@angular/core';

import {ProductosService} from '../services/productos.service'
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {

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
