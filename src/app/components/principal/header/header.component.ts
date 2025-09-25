import { Component } from '@angular/core';

import { BuscaComponent } from '../../busca/busca.component';
import { BotaoHeaderComponent } from '../botao-header/botao-header.component'
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-header',
  imports: [BuscaComponent, BotaoHeaderComponent, RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {  
  elementos = [
    {nome:'Ofertas'},
    {nome:'Categoria'},
    {nome:'Mais Acessados'},
    {nome:'Novidades'},
    {nome:'Colecionaveis'},
    {nome:'Franquias'}
  ]
}
