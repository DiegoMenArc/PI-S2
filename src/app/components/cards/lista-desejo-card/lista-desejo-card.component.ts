import { Component } from '@angular/core';
import { BuscaComponent } from '../../busca/busca.component';
import { CardProdDesejoComponent } from '../card-prod-desejo/card-prod-desejo.component';

@Component({
  selector: 'app-lista-desejo-card',
  imports: [BuscaComponent, CardProdDesejoComponent],
  templateUrl: './lista-desejo-card.component.html',
  styleUrl: './lista-desejo-card.component.css'
})
export class ListaDesejoCardComponent {

}
