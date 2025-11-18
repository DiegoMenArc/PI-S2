import { Component, inject, OnInit } from '@angular/core';
import { BreadcumbsComponent } from '../../components/principal/breadcumbs/breadcumbs.component';
import { CarrosselprodComponent } from '../produto/partes/carrosselprod/carrosselprod.component';
import { FooterComponent } from '../../components/principal/footer/footer.component';
import { ActivatedRoute } from '@angular/router';
import { CardPadraoComponent } from '../../components/cards/card-padrao/card-padrao.component';
import { Produto } from '../../core/types/types';
import { ProdutosService } from '../../core/services/produtos.service';

@Component({
  selector: 'busca',
  imports: [BreadcumbsComponent,CardPadraoComponent, CarrosselprodComponent, FooterComponent],
  templateUrl: './busca.component.html',
  styleUrl: './busca.component.css'
})
export class BuscaComponent implements OnInit{
  _caminho = inject(ActivatedRoute);
  rotaAtual:string ="";
  listaProdutos:Produto[] = [];
  produtosFiltrados:Produto[] = [];

  constructor(
    private service: ProdutosService
  ){}

  busca() {
    if(this.rotaAtual !=  this._caminho.snapshot.url[1].path){
      window.location.reload();
    }
    return  this._caminho.snapshot.url[1].path;
  }

  // Variável para controlar a visibilidade do menu
  menuAberto: boolean = false; 

  ngOnInit(): void {
     this.rotaAtual = this._caminho.snapshot.paramMap.get('busca')||"";

    this.service.listarProdutos().subscribe((produtos) => {
      this.listaProdutos = produtos.filter(produto =>
        produto.nome.toLowerCase().includes(this.rotaAtual.toLowerCase())
      );
    }); 
    }

  anos = ['2000', '90', '80', '70']
  categorias = ['Classicos', 'Articulaveis', 'Pelucia', 'Blocos  de construção', 'Peões', 'Veiculos', 'Esportes', 'Inflaveis']
  marcas = ['Estrela', 'Lider Brinquedos', 'Nig Brinquedos', 'Novabrink', 'Orange Toys', 'Candide', 'Atma', 'Glasslite']
}
