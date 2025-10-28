import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ProdutosService } from '../../../core/services/produtos.service';


@Component({
  selector: 'app-lista-prd',
  imports: [ RouterLink ],
  templateUrl: './lista-prd.component.html',
  styleUrl: './lista-prd.component.css'
})
export class ListaPrdComponent {
    _produtosMain = inject(ProdutosService);
    _produtos = this._produtosMain.produtos;
    numPages=1;

    getEdit(n:number){
      return `/adm/produto/edit/${n}`
    }

    getImg(prod:any){
      return prod.img[0];
    }

    removerProd(posicao:number){
      this._produtosMain.removerProduto(posicao);
    }

    tipos:String[] = ["Produto", "Preço", "Tamanho", "Quantidade", "Data", "Ações"];
}
