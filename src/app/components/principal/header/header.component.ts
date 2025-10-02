import { Component, Output, EventEmitter, inject } from '@angular/core';
import { BuscaComponent } from '../../busca/busca.component';
import { BotaoHeaderComponent } from '../botao-header/botao-header.component';
import { RouterLink } from '@angular/router';
import { UsuarioService } from '../../../services/usuario.service';
import { CommonModule } from '@angular/common';
// Remova a importação do MenuComponent, pois ele não é usado aqui.
// import { MenuComponent } from '../menu/menu.component'; 

@Component({
  selector: 'app-header',
  // Remova MenuComponent do array de imports.
  imports: [BuscaComponent, BotaoHeaderComponent, RouterLink, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  _usuarioAtual = inject(UsuarioService);

  @Output() abrirMenuEvent = new EventEmitter<void>();

  // Remova a propriedade menuAberto e os métodos abrirMenu() e fecharMenu().
  // Eles não são mais necessários neste componente.

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
}