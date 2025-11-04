import { Component, inject } from '@angular/core';
import { AdmHeaderComponent } from '../../../components/ADM/adm-header/adm-header.component';
import { NavComponent } from '../../../components/ADM/nav/nav.component';
// import { ListaPrdComponent } from '../../../components/ADM/lista-prd/lista-prd.component';
import { BreadcumbsComponent } from '../../../components/principal/breadcumbs/breadcumbs.component';
import { FormsModule } from '@angular/forms';
import { ProdutosService } from '../../../core/services/produtos.service';
import { ActivatedRoute, Route, Router, RouterLink } from '@angular/router';
import { Produto, Especificacao } from '../../../core/types/types';

class ImageSnippet {
  constructor(public src: string, public file: File) { }
}

@Component({
  selector: 'app-adm-add',
  imports: [AdmHeaderComponent, NavComponent, /*ListaPrdComponent,*/ BreadcumbsComponent, FormsModule, RouterLink],
  templateUrl: './adm-add.component.html',
  styleUrl: './adm-add.component.css'
})
export class AdmAddComponent {
  produtoId?: number; // Id que vai ser puxado da rota

  produto: Produto = {} as Produto; // objeto do produto 

  especificacao: Especificacao = {} as Especificacao; // objeto da classe Espefi

  constructor(
    private service: ProdutosService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.produtoId = Number(this.route.snapshot.params['id']);

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

    

    if (this.produto.especificacoes == undefined) {
      this.produto.especificacoes =
        [
          {
            especificacao: "",
            valor: ""
          }
        ]
    }
  }

  paginas = ["Produtos", "adicionarProduto"];


  addProd() {
    if (this.produtoId) {
      this.service.editarProduto(this.produto).subscribe(() => {
        this.router.navigate(['adm/produto'])
      })
    } else {

      if(this.produto.img == undefined){
        this.produto.img = ['/img/prod1.jpg'];
      }
      if(this.produto.avaliacoes==undefined){
        this.produto.avaliacoes = {
          totalAvaliacoes:0,
          media:0
        }
      }

      const hoje = new Date();
      const dia = String(hoje.getDate()).padStart(2, '0');
      const mes = String(hoje.getMonth() + 1).padStart(2, '0'); // Adiciona 1 pois os meses começam em 0
      const ano = hoje.getFullYear();

      const dataFormatada = `${dia}/${mes}/${ano}`;

      this.produto.data = dataFormatada;
      this.service.adiconarProduto(this.produto).subscribe(() => {
        this.router.navigate(['adm/produto'])
      })
    }
  }

  addEspecificacao() {
    this.produto.especificacoes.push(
      {
        especificacao:"especificação",
        valor:"valor"
      })

  }

  // Feedback imagens =======================================================================

  imagemSelecionada: ImageSnippet[] = [];

  caminho: any = "icons/adm/img-frame-icon.svg";

  carregarArquivo(img: any, posicao: number) {
    const file: File = img.files[0];
    const reader = new FileReader;

    reader.addEventListener('load', (event: any) => {
      this.imagemSelecionada[posicao] = new ImageSnippet(event.target.result, file)
      this.caminho = this.imagemSelecionada[posicao].src;
    })

    reader.readAsDataURL(file);
  }
}
