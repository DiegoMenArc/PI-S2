import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'login',
  imports: [FormsModule, RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  usuario = "";
  senha = "";
  credenciais = "";
  verificar = false;


  verificarLink(e:any){
    if(e.form.value.usuario === "admin" && e.form.value.senha === "1234" ){
      return "/adm";
    }
    else{
      return null;
    }
  }

  validar(){
    this.verificar = true;
    this.credenciais="Credenciais invalidas";
  }

}
