import { Component } from '@angular/core';

@Component({
  selector: 'app-especificacoes-prod',
  imports: [],
  templateUrl: './especificacoes-prod.component.html',
  styleUrl: './especificacoes-prod.component.css'
})
export class EspecificacoesProdComponent {
  especificacoes = [
    {
      especificao:"Cores",
      valor:"Azul e Amarelo"
    }
  ]

  Adicionais = [
    {
      especificao:"Tamanho",
      valor:"30x30x30 cm"
    },
    {
      especificao:"Avaliações",
      valor:"5 / 5 de 1.700 Avaliações"
    },
    {
      especificao:"Ano de lançamento",
      valor:"10 de Fevereiro de 1901"
    },
    {
      especificao:"Disponível para compra desde",
      valor:"17 de Setembro de 2025"
    }
  ]
}
