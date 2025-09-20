import { Component } from '@angular/core';

import { BuscaComponent } from '../../busca/busca.component';
import { BotaoHeaderComponent } from '../botao-header/botao-header.component'

@Component({
  selector: 'app-header',
  imports: [BuscaComponent, BotaoHeaderComponent],
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
