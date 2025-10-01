import { Component, inject } from '@angular/core';
import { BuscaComponent } from '../../busca/busca.component';
import { BotaoHeaderComponent } from '../botao-header/botao-header.component';
import { RouterLink } from '@angular/router';
import { UsuarioService } from '../../../services/usuario.service';
import { CommonModule } from '@angular/common';
import { MenuComponent } from '../menu/menu.component';

@Component({
  selector: 'app-header',
  imports: [BuscaComponent, BotaoHeaderComponent, RouterLink, CommonModule, MenuComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  _usuarioAtual = inject(UsuarioService);

  menuAberto: boolean = false;

  elementos = [
    {nome:'Ofertas'},
    {nome:'Categoria'},
    {nome:'Mais Acessados'},
    {nome:'Novidades'},
    {nome:'Colecionaveis'},
    {nome:'Franquias'}
  ];

  caminho() {
    return this._usuarioAtual.usuario === '' ? '/login' : '/usuario/10/informacoes';
  }

  abrirMenu() {
    this.menuAberto = !this.menuAberto;
  }

  fecharMenu() {
    this.menuAberto = false;
  }
}