import { Component } from '@angular/core';
import { AdmHeaderComponent } from '../../../components/ADM/adm-header/adm-header.component';
import { NavComponent } from '../../../components/ADM/nav/nav.component';
import { BreadcumbsComponent } from '../../../components/principal/breadcumbs/breadcumbs.component';
import { FormsModule } from '@angular/forms';
import { ProdutosService } from '../../../core/services/produtos.service';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { Produto, Especificacao } from '../../../core/types/types';

class ImageSnippet {
  constructor(public src: string, public file: File) { }
}

@Component({
  selector: 'app-adm-add',
  imports: [
    AdmHeaderComponent,
    NavComponent,
    BreadcumbsComponent,
    FormsModule,
    RouterLink
  ],
  templateUrl: './adm-add.component.html',
  styleUrl: './adm-add.component.css'
})

export class AdmAddComponent {
  produtoId?: string; // Id que vai ser puxado da rota
  temProduto: boolean = false;

  produto: Produto = {} as Produto; // objeto do produto 
  especificacao: Especificacao = {} as Especificacao; // objeto da classe Espeficação
  paginas = ["Produtos", "adicionarProduto"];

  constructor(
    private service: ProdutosService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.produtoId = this.route.snapshot.params['id'];

    if (this.produtoId) {
      this.service.buscaId(this.produtoId).subscribe(produto => {
        if (produto) {
          this.temProduto = true;
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
          { especificacao: "", valor: "" }
        ];
    }
  }

  // ====================================== SALVAR PRODUTO ======================================
  addProd() {
    if (!this.validarCampos()) {
      alert("Preencha todos os campos obrigatórios!");
      return;
    }

    if (this.produtoId) {
      // editar
      this.service.editarProduto(this.produto).subscribe(() => {
        this.router.navigate(['adm/produto']);
      });
      return;
    }

    // criar novo
    if (!this.produto.img || this.produto.img.length === 0) {
      this.produto.img = ['/img/prod1.jpg'];
    }

    if (!this.produto.avaliacoes) {
      this.produto.avaliacoes = { totalAvaliacoes: 0, media: 0 };
    }

    const hoje = new Date();
    const dia = String(hoje.getDate()).padStart(2, '0');
    const mes = String(hoje.getMonth() + 1).padStart(2, '0');
    const ano = hoje.getFullYear();
    this.produto.data = `${dia}/${mes}/${ano}`;

    this.service.adiconarProduto(this.produto).subscribe(() => {
      this.router.navigate(['adm/produto']);
    });
  }

  // =================================== ADICIONAR ESPECIFICAÇÃO ===================================
  addEspecificacao() {
    this.produto.especificacoes.push({
      especificacao: "",
      valor: ""
    });
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

  // ====================== VALIDAÇÃO DE CAMPOS ======================
  validarCampos(): boolean {
    const p = this.produto;

    if (!p.nome || p.nome.trim() === "") return false;
    if (!p.descricao || p.descricao.trim() === "") return false;
    if (!p.marca || p.marca.trim() === "") return false;
    if (!p.preco || p.preco.toString().trim() === "") return false;
    if (!p.tamanho || p.tamanho.trim() === "") return false;
    if (!p.qtd || p.qtd <= 0) return false;
    if (!p.categoria || p.categoria.trim() === "") return false;
    if (!p.anoLancamento || p.anoLancamento.toString().trim() === "") return false;

    // valida especificações
    for (let e of p.especificacoes) {
      if (!e.especificacao || !e.valor) return false;
    }

    return true;
  }
}
