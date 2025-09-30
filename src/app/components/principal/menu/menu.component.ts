import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { UsuarioService } from '../../../services/usuario.service';
@Component({
  selector: 'app-menu',
  imports: [RouterLink],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {
_usuarioAtual = inject(UsuarioService);

  elementos = [
    {nome:'Entrar'},
    {nome:'Cadastrar'},
    {nome:'Minhas compras'},
    {nome:'Lista de presente'},
    {nome:'Minhas avaliações'},
    {nome:'Ajuda'},
    {nome:'Política de privacidade'},
    {nome:'Termos e condições'}
  ]

  caminho(){
    let rota="";

    (this._usuarioAtual.usuario==="")?rota="/login":rota="/usuario/10/informacoes";

    return rota;
  }
}
