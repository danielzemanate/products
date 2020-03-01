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
  categories:any = [];
  selectedCategory:any = null;

  constructor(
    private productosService:ProductosService, 
    private router: Router, 
    private activatedRoute:ActivatedRoute,
    public auth: AuthenticationService) { }

  ngOnInit(): void {
    this.getCategories();

    const params= this.activatedRoute.snapshot.params;
    if(params.id){
      this.productosService.getProduct(params.id)
      .subscribe(
        res=>{
          //console.log(res)
          var response = res[0];
          this.edit=true
          this.product = response;
        },
        err=>console.error(err)
      )
    }
  }

  saveNewProduct(){
    //console.log(this.selectedCategory)
    this.product.id_user = this.auth.getUserDetails()?.id;
   this.product.tipo = this.selectedCategory.nombre;
   this.product.id_category = this.selectedCategory.id;
    this.productosService.saveProduct(this.product)
    .subscribe(
      res=>{
        console.log(res)
        this.router.navigate(['/']);

      },
      err=>console.error(err)
    )
    //console.log(this.product)
  }
  updateProduct(){
    this.product.tipo = this.selectedCategory.nombre;
   this.product.id_category = this.selectedCategory.id;
    //console.log(this.selectedCategory)
    this.productosService.updateProduct(this.product.id,this.product)
    .subscribe(
      res=>{
        console.log(res)
        this.router.navigate(['/']);
      },
      err=>console.error(err)
    )
    //console.log(this.product)
  }

  getCategories(){
    let id = this.auth.getUserDetails()?.id;
    console.log("Id Usuario: ", id)
    if(id){
      this.productosService.getCategoriesUser(id).subscribe(
        res=> {
          console.log("Categorias: ", res);
          this.categories=res;
          this.selectedCategory=this.categories[0]
        },
        err=>console.error(err)
      )
    }
  }

  selectCategory(event:any){
    console.log("Event: ", event);
    let position = event.srcElement.selectedIndex;
    this.selectedCategory = this.categories[position];
    console.log("Categoría Seleccionada: ", this.selectedCategory)
  }
}