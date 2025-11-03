import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { ProdutosService } from '../../../core/services/produtos.service';
import { Produto } from '../../../core/types/types';


@Component({
  selector: 'app-lista-prd',
  imports: [ RouterLink ],
  templateUrl: './lista-prd.component.html',
  styleUrl: './lista-prd.component.css'
})
export class ListaPrdComponent implements OnInit {
    listarProduto:Produto[] = [];

    constructor(
      private service: ProdutosService,
      private router: Router
    ){}

    ngOnInit(): void {
      this.service.listarProdutos().subscribe((produto)=>{
        this.listarProduto = produto;
      });
    }

    numPages=1;

    getEdit(n:number){
      this.router.navigate([`adm/produto/edit/${n}`])
    }

    getImg(prod:any){
      return prod.img[0];
    }

    removerProd(posicao:number){
      
      if(posicao){
        this.service.removerProduto(posicao).subscribe(() => {
        window.location.reload();
      });
      alert('Produto removido')
    }

    }

    tipos:String[] = ["Produto", "Preço", "Tamanho", "Quantidade", "Data", "Ações"];
}
