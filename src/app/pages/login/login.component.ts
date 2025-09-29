import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { UsuarioService } from '../../services/usuario.service';

@Component({
  selector: 'login',
  imports: [FormsModule, RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  _usuarioAtual = inject(UsuarioService);
  usuario = "";
  senha = "";
  credenciais = "";
  verificar = false;


  verificarLink(e:any){
    if(e.form.value.usuario === "admin" && e.form.value.senha === "1234" ){
      return "/adm";
    }
    else if(e.form.value.usuario=== "valdir" && e.form.value.senha === "1234"){
      this._usuarioAtual.fazerLogin();
      return "/";
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
