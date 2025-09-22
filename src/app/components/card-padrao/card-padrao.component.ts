import { Component } from '@angular/core';

@Component({
  selector: 'app-cardPadrao',
  imports: [],
  templateUrl: './card-padrao.component.html',
  styleUrl: './card-padrao.component.css'
})
export class CardPadraoComponent {
  nota = ['','','','',''];

  nome = "Casinha de brinquedo"
  valorCD = 99.00
  valor = 90
  prest = "2x de R$45,00 Sem juros"
}
