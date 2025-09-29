import { Component, inject } from '@angular/core';

import { BuscaComponent } from '../../busca/busca.component';
import { BotaoHeaderComponent } from '../botao-header/botao-header.component'
import { RouterLink } from '@angular/router';
import { UsuarioService } from '../../../services/usuario.service';


@Component({
  selector: 'app-header',
  imports: [BuscaComponent, BotaoHeaderComponent, RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
   _usuarioAtual = inject(UsuarioService);

  elementos = [
    {nome:'Ofertas'},
    {nome:'Categoria'},
    {nome:'Mais Acessados'},
    {nome:'Novidades'},
    {nome:'Colecionaveis'},
    {nome:'Franquias'}
  ]

  caminho(){
    let rota="";

    (this._usuarioAtual.usuario==="")?rota="/login":rota="/usuario/10/informacoes";

    return rota;
  }
}
