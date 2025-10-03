import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ProdutosService } from '../../../services/produtos.service';


@Component({
  selector: 'app-lista-prd',
  imports: [ RouterLink ],
  templateUrl: './lista-prd.component.html',
  styleUrl: './lista-prd.component.css'
})
export class ListaPrdComponent {
    _produtosMain = inject(ProdutosService);
    _produtos = this._produtosMain.produtos;

    getImg(prod:any){
      return prod.img[0];
    }

    addProd(){
      this._produtosMain.adiconarProduto();
    }

    removerProd(posicao:number){
      this._produtosMain.removerProduto(posicao);
    }
    codPrd:number = 0;
    nomeProduto:String = "Produto Legal";
    preco:number = 0;
    qtdPrd:number = 0;
    tamanhoPrd:number = 0;
    data: Date = new Date("20XX-XX-XX");
    numPages:number = 0;

    tipos:String[] = ["Produto", "Preço", "Tamanho", "Quantidade", "Data", "Ações"];
}
