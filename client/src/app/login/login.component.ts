import { Component } from '@angular/core'
import { AuthenticationService, TokenPayload } from '../authentication.service'
import { Router } from '@angular/router'

@Component({
  templateUrl: './login.component.html'
})
export class LoginComponent {
  credentials: TokenPayload = {
    id: 0,
    nombre: '',
    apellido: '',
    correo: '',
    password: ''
  }

  constructor(private auth: AuthenticationService, private router: Router) {}

  login() {
    this.auth.login(this.credentials).subscribe(
      () => {
        //localStorage.setItem('user_id', )
        this.router.navigateByUrl('/')
      },
      err => {
        console.error(err)
      }
    )
  }
}