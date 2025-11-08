import { Component } from '@angular/core';
import { CardPadraoComponent } from '../../../../components/cards/card-padrao/card-padrao.component';

@Component({
  selector: 'cards-busca',
  imports: [CardPadraoComponent],
  templateUrl: './cards-busca.component.html',
  styleUrl: './cards-busca.component.css'
})
export class CardsBuscaComponent {
cards: any;

}
