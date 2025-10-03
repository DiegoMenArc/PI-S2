import { Component, Output, EventEmitter, inject } from '@angular/core';
import { BuscaComponent } from '../../busca/busca.component';
import { BotaoHeaderComponent } from '../botao-header/botao-header.component';
import { RouterLink } from '@angular/router';
import { UsuarioService } from '../../../services/usuario.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  imports: [BuscaComponent, BotaoHeaderComponent, RouterLink, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  _usuarioAtual = inject(UsuarioService);

  @Output() abrirMenuEvent = new EventEmitter<void>();

  elementos = [
    {nome:'Ofertas'},
    {nome:'Categoria'},
    {nome:'Mais Acessados'},
    {nome:'Novidades'},
    {nome:'Colecionaveis'},
    {nome:'Franquias'}
  ];

  caminho() {
    return (this._usuarioAtual.usuario === 'admin') ? '/adm/produto' :(this._usuarioAtual.usuario === "")? '/login' : `/usuario/${this._usuarioAtual.usuario}/informacoes`;
  }
}