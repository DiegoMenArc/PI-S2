import { Component } from '@angular/core';

import { FooterComponent } from '../../components/principal/footer/footer.component'
import { ProdMainComponent } from './partes/prod-main/prod-main.component'
import { CarrosselprodComponent } from './partes/carrosselprod/carrosselprod.component';
import { EspecificacoesProdComponent } from './partes/especificacoes-prod/especificacoes-prod.component';
import { ComentariosComponent } from './partes/comentarios/comentarios.component';
import { Produto } from '../../core/types/types';
import { ProdutosService } from '../../core/services/produtos.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-produto',
  imports: [ FooterComponent,ProdMainComponent,CarrosselprodComponent, EspecificacoesProdComponent, ComentariosComponent],
  templateUrl: './produto.component.html',
  styleUrl: './produto.component.css'
})
export class ProdutoComponent {
  produtoId?: string; // Id que vai ser puxado da rota

  produto: Produto = {} as Produto; // objeto do produto 


  constructor(
    private service: ProdutosService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.produtoId = this.route.snapshot.params['id'];

    if (this.produtoId) {
      service.buscaId(this.produtoId).subscribe(produto => {
        if (produto) {
          this.produto.id = produto.id;
          this.produto.img = produto.img;
          this.produto.nome = produto.nome;
          this.produto.descricao = produto.descricao;
          this.produto.anoLancamento = produto.anoLancamento;
          this.produto.marca = produto.marca;
          this.produto.preco = produto.preco;
          this.produto.tamanho = produto.tamanho;
          this.produto.qtd = produto.qtd;
          this.produto.data = produto.data;
          this.produto.categoria = produto.categoria;
          this.produto.especificacoes = produto.especificacoes;
          this.produto.disponibilidade = produto.disponibilidade;
          this.produto.avaliacoes = produto.avaliacoes;
        }
      })
    }
  }
}


