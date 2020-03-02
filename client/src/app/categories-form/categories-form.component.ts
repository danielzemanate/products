import { Component, OnInit, HostBinding  } from '@angular/core';
import {ProductosService} from '../services/productos.service';
import { AuthenticationService } from '../authentication.service'
import{Router, ActivatedRoute} from '@angular/router'
import {Category} from '../models/category'

@Component({
  selector: 'app-categories-form',
  templateUrl: './categories-form.component.html',
  styleUrls: ['./categories-form.component.scss']
})
export class CategoriesFormComponent implements OnInit {
  @HostBinding ('class') classes='row';

  category : Category={
    id:0,
    id_user: null,
    nombre:'',
 
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

    const params= this.activatedRoute.snapshot.params;
    if(params.id){
      this.productosService.getCategory(params.id)
      .subscribe(
        res=>{
          console.log(res)
          var response = res[0];
          this.edit=true
          this.category = response;
        },
        err=>console.error(err)
      )
    }
  }
  
saveNewCategory(){
    //console.log(this.selectedCategory)
    this.category.id_user = this.auth.getUserDetails()?.id;
    this.productosService.saveCategory(this.category)
    .subscribe(
      res=>{
        console.log(res)
        this.router.navigate(['/categories']);

      },
      err=>console.error(err)
    )
    //console.log(this.product)
  }

  updateCategory(){
    //console.log(this.selectedCategory)
    this.productosService.updateCategory(this.category.id,this.category)
    .subscribe(
      res=>{
        console.log(res)
        this.router.navigate(['/categories']);
      },
      err=>console.error(err)
    )
    //console.log(this.product)
  }
}
