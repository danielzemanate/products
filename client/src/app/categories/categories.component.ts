import { Component, OnInit, HostBinding } from '@angular/core';
import {ProductosService} from '../services/productos.service'
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { AuthenticationService } from '../authentication.service'

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {

 
  @HostBinding('class') classes='row'
  products:any = [];
  searchText

  edit:boolean= false;
  categories:any = [];
  selectedCategory:any = null;
  
  constructor(private productosServices:ProductosService, public auth: AuthenticationService) { }
  ngOnInit(): void {
   // this.getProducts();
   this.getCategories();
  }

  getCategories(){
    let id = this.auth.getUserDetails()?.id;
    console.log("Id Usuario: ", id)
    if(id){
      this.productosServices.getCategoriesUser(id).subscribe(
        res=> {
          console.log("Categorias: ", res);
          this.categories=res;
          this.selectedCategory=this.categories[0]
        },
        err=>console.error(err)
      )
    }
  }
 /*  getProducts(){
    let id = this.auth.getUserDetails()?.id;
    //console.log("Id Usuario: ", id)
    if(id){
      this.productosServices.getProductsUser(id).subscribe(
        res=> {
          this.products=res;
        },
        err=>console.error(err)
      )
    }else{
      this.productosServices.getProducts().subscribe(
        res=> {
          this.products=res;
        },
        err=>console.error(err)
      )
    }
    
  } */
  deleteProduct(id:string){
    console.log(id)
    this.productosServices.deleteProduct(id).subscribe(
      res=>{
       // this.getProducts();
        console.log(res)
      },
      err=>console.error(err)
    )
  }
  editProduct(id:string){
    console.log(id);
  }
}


