import { Component } from '@angular/core'
import { AuthenticationService } from './authentication.service'
import {ProductosService} from './services/productos.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  constructor(public auth: AuthenticationService,
            private productosServices:ProductosService) {}

  logout(){
    console.log("Logout")
    this.auth.logout();

    /* this.productosServices.getProducts().subscribe(
      res=> {
      },
      err=>console.error(err)
    ) */
  }
}