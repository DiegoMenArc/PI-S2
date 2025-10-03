import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-cardPadrao',
  imports: [RouterLink],
  templateUrl: './card-padrao.component.html',
  styleUrl: './card-padrao.component.css'
})
export class CardPadraoComponent {
  nota = [' ',' ',' ',' ',' '];

  nome = "Casinha de brinquedo"
  valorCD = 99.00
  valor = 90
  prest = "2x de R$45,00 Sem juros"
}
