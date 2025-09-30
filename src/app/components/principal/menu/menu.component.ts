import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { UsuarioService } from '../../../services/usuario.service';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
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
  ];

  caminho() {
    return this._usuarioAtual?.usuario === ""
      ? "/login"
      : "/usuario/10/informacoes";
  }
}
