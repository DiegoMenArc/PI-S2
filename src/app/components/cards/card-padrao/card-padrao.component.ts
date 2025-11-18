 import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-cardPadrao',
  imports: [RouterLink],
  templateUrl: './card-padrao.component.html',
  styleUrl: './card-padrao.component.css'
})
export class CardPadraoComponent {
  constructor(
    private router: Router
  ){}
  nota = [' ', ' ', ' ', ' ', ' '];

  @Input() nome?: String;
  @Input() valor?: any;
  @Input() valorCD?: string;
  @Input() prest?: string;
  @Input() frete?: string;

  @Input() id?: string;
  @Output() novaRota = new EventEmitter<string>();

  getRota(){
    this.novaRota.emit(this.id);
  }

  getProduto(){
    this.router.navigate([`/produto/${this.id}`]);
  }

  //  @Input() nome: String = "Casinha de brinquedo"
  // @Input() valorCD: number = 99.00
  // @Input() valor: number = 90
  // prest = "2x de R$45,00 Sem juros"
}
