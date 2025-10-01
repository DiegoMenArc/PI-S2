import { Component, inject } from '@angular/core';
import { BuscaComponent } from '../../busca/busca.component';
import { BotaoHeaderComponent } from '../botao-header/botao-header.component';
import { RouterLink } from '@angular/router';
import { UsuarioService } from '../../../services/usuario.service';
import { CommonModule } from '@angular/common'; // Importe CommonModule
import { MenuComponent } from '../menu/menu.component'; // Importe o MenuComponent

@Component({
  selector: 'app-header',
  imports: [BuscaComponent, BotaoHeaderComponent, RouterLink, CommonModule, MenuComponent], // Adicione MenuComponent e CommonModule aqui
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  _usuarioAtual = inject(UsuarioService);

  menuAberto: boolean = false; // Estado para controlar o menu

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

  // Novo método para alternar o estado do menu
  abrirMenu() {
    this.menuAberto = !this.menuAberto;
  }

  // Método para fechar o menu, emitido pelo componente filho
  fecharMenu() {
    this.menuAberto = false;
  }
}