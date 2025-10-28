import { Component, inject } from '@angular/core';  
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { UsuarioService } from '../../core/services/usuario.service';
import { MenuHeaderComponent } from "../../components/principal/menu-header/menu-header.component";
import { FooterComponent } from "../../components/principal/footer/footer.component";

@Component({
  selector: 'login',
  imports: [FormsModule, RouterLink, MenuHeaderComponent, FooterComponent],
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
    let user = e.form.value.usuario;
    let pass = e.form.value.senha;
    
    if(user === "admin" && pass === "1234" ){
      this._usuarioAtual.fazerLogin(user);
      return "/adm/produto";
    }
    else if(user === "valdir" && pass === "1234"){
      this._usuarioAtual.fazerLogin(user);
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
