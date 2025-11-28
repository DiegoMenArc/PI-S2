import { Component, OnInit } from '@angular/core';

import { FooterComponent } from '../../components/principal/footer/footer.component'
import { ProdMainComponent } from './partes/prod-main/prod-main.component'
import { CarrosselprodComponent } from './partes/carrosselprod/carrosselprod.component';
import { EspecificacoesProdComponent } from './partes/especificacoes-prod/especificacoes-prod.component';
import { ComentariosComponent } from './partes/comentarios/comentarios.component';
import { Especificacao, Produto, Usuario } from '../../core/types/types';
import { ProdutosService } from '../../core/services/produtos.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CarrosselComponent } from '../../components/principal/carrossel/carrossel.component';
import { AutenticadorService } from '../../core/services/autenticador.service';


@Component({
  selector: 'app-produto',
  imports: [ FooterComponent, CarrosselComponent , ProdMainComponent, EspecificacoesProdComponent, ComentariosComponent],
  templateUrl: './produto.component.html',
  styleUrl: './produto.component.css'
})
export class ProdutoComponent implements OnInit{
  produtoId?: string; // Id que vai ser puxado da rota

  produto: Produto = {} as Produto; // objeto do produto 
  produtos: Produto[] = []; // array de produtos
  adicionais?: Especificacao[];

  user!: Usuario

  constructor(
    private service: ProdutosService,
    private router: Router,
    private route: ActivatedRoute,
    private auth: AutenticadorService
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

          this.adicionais = [
            {
              especificacao:"Avaliações",
              valor:`${produto.avaliacoes?.media}/5 de ${produto.avaliacoes?.totalAvaliacoes} Avaliaçoes`
            },
            {
              especificacao:"Tamanho",
              valor:produto.tamanho||""
            },
            {
              especificacao:"Ano de lançamento",
              valor:produto.anoLancamento
            },
            {
              especificacao:"Disponivel desde",
              valor:produto.data||""
            }
          ]
        }
      })
    }
    window.scrollTo(0, 0);
  }

  pegarId(id: string){
    this.produtoId = id;

    this.service.buscaId(this.produtoId).subscribe(produto => {
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

          this.adicionais = [
            {
              especificacao:"Avaliações",
              valor:`${produto.avaliacoes?.media}/5 de ${produto.avaliacoes?.totalAvaliacoes} Avaliaçoes`
            },
            {
              especificacao:"Tamanho",
              valor:produto.tamanho||""
            },
            {
              especificacao:"Ano de lançamento",
              valor:produto.anoLancamento
            },
            {
              especificacao:"Disponivel desde",
              valor:produto.data||""
            }
          ]
        }
      })
      window.scrollTo(0, 0);
  }

  slideConfig = {
    "slidesToShow": 6,
    "slidesToScroll": 6,
    "arrows": true,
    "autoplay":true,
    "autoplaySpeed": 5000,
    "pauseOnHover": true,
    "infinite": true,

    "responsive" : [{
      "breakpoint" : 1730,
      "settings": {
        "arrows": true,
        "infinite": true,
        "slidesToShow": 5,
        "slidesToScroll": 5
      }
    },
    {
      "breakpoint" : 1500,
      "settings": {
        "arrows": true,
        "infinite": true,
        "slidesToShow": 4,
        "slidesToScroll": 4
      }
    },
    {
      "breakpoint" : 992,
      "settings": {
        "arrows": true,
        "infinite": true,
        "slidesToShow": 3,
        "slidesToScroll": 3
      }
    },
    {
      "breakpoint" : 768,
      "settings": {
        "arrows": true,
        "infinite": true,
        "slidesToShow": 1,
        "slidesToScroll": 1
      }
    }]
  };

  ngOnInit(): void {
    this.user = this.auth.getUser()
  }
}


