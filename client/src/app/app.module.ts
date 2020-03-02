import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { HttpClientModule } from '@angular/common/http'

import { FormsModule } from '@angular/forms'
import { RouterModule, Routes } from '@angular/router'
import { AppComponent } from './app.component'
import { ProfileComponent } from './profile/profile.component'
import { LoginComponent } from './login/login.component'
import { RegisterComponent } from './register/register.component'
import { HomeComponent } from './home/home.component'
import { AuthenticationService } from './authentication.service'
import { AuthGuardService } from './auth-guard.service';
import { ProductsFormComponent } from './products-form/products-form.component';
import { ProductsListComponent } from './products-list/products-list.component';
import {ProductosService} from './services/productos.service';


import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { CategoriesComponent } from './categories/categories.component';
import { CategoriesFormComponent } from './categories-form/categories-form.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  {
    path: 'profile',
    component: ProfileComponent,
    canActivate: [AuthGuardService]
  },
  
  {
    path: 'addProduct',
    component: ProductsFormComponent,
    
  },
  {
    path: 'edit/:id',
    component: ProductsFormComponent,
    
  },

  {
    path: 'editCategory/:id',
    component: CategoriesFormComponent,
    
  },

  {
    path: 'categories',
    component: CategoriesComponent, 
  },
  {
    path: 'addCategories',
    component: CategoriesFormComponent,
    
  },
]


@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    ProductsFormComponent,
    ProductsListComponent,
    CategoriesComponent,
    CategoriesFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    Ng2SearchPipeModule,
    RouterModule.forRoot(routes)
  ],
  providers: [AuthenticationService, 
              AuthGuardService,
              ProductosService

  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
