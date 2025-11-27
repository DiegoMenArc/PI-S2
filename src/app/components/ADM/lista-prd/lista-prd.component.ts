import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { ProdutosService } from '../../../core/services/produtos.service';
import { Produto } from '../../../core/types/types';
import { BreadcumbsComponent } from '../../principal/breadcumbs/breadcumbs.component';


@Component({
  selector: 'app-lista-prd',
  imports: [ RouterLink, BreadcumbsComponent ],
  templateUrl: './lista-prd.component.html',
  styleUrl: './lista-prd.component.css'
})
export class ListaPrdComponent implements OnInit {
    listarProduto:Produto[] = [];
    produtos:Produto[] = [];

    constructor(
      private service: ProdutosService,
      private router: Router
    ){}

    ngOnInit(): void {
      this.service.listarProdutos().subscribe((produto)=>{
        this.produtos = produto;
        this.listarProduto = this.produtos
      });
    }

    buscar(busca:any){
      this.listarProduto = this.produtos.filter(produto =>
        produto.nome.toLowerCase().includes(busca.target.value)
      );
    }

    numPages=1;

    getEdit(n:string){
      this.router.navigate([`adm/produto/edit/${n}`])
    }

    getImg(prod:any){
      return prod.img[0];
    }

    removerProd(posicao:string){
      
      if(posicao){
        this.service.removerProduto(posicao).subscribe(() => {
        window.location.reload();
      });
      alert('Produto removido')
    }

    }

    tipos:String[] = ["Produto", "Preço", "Tamanho", "Quantidade", "Data", "Ações"];
}
