import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {
  numero=2;

  produtos=[
    {
      img:[
        "img/prod1.jpg"
      ],
      id:1,
      nome:"Produto Legal",
      descricao:"esto es un produto muy legal, que nosotros gostamos mucho",
      anoLancamento:"10/11/2000",
      marca:"Estrela",
      preco:"00,00",
      tamanho:"0",
      qtd:0,
      data:"02/10/2025",
      categoria:"Uma categoria ai",
      especificacoes:[
        {
          especificacao:"Espeficação",
          valor:"valor"
        },
        {
          especificacao:"Espeficação",
          valor:"valor"
        }
      ]
    }
  ]

  adiconarProduto(objeto:any){
    this.produtos.push(
      objeto
    )
  }

  removerProduto(index: number){
    this.produtos.splice(index,1);
  }
}
