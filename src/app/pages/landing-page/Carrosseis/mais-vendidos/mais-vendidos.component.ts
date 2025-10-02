import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardPadraoComponent } from '../../../../components/card-padrao/card-padrao.component';

@Component({
  selector: 'app-mais-vendidos',
  imports: [CommonModule, CardPadraoComponent],
  templateUrl: './mais-vendidos.component.html',
  styleUrl: './mais-vendidos.component.css'
})
export class MaisVendidosComponent {

  produtos = [
    { imagem: 'image 24.png'},
    { imagem: 'image 24.png'},
    { imagem: 'image 24.png'},
    { imagem: 'image 24.png'},
    { imagem: 'image 24.png'},
    { imagem: 'image 24.png'},
    { imagem: 'image 24.png'},
    { imagem: 'image 24.png'},
    { imagem: 'image 24.png'},
    { imagem: 'image 24.png'},
    { imagem: 'image 24.png'},
    { imagem: 'image 24.png'},
    { imagem: 'image 24.png'}

  ];

  paginaAtual = 0;
  produtosPorPagina = 5;

  totalPaginas() {
    return Math.ceil(this.produtos.length / this.produtosPorPagina);
  }

  proximo() {
    this.paginaAtual = (this.paginaAtual + 1) % this.totalPaginas();
  }

  anterior() {
    this.paginaAtual = (this.paginaAtual - 1 + this.totalPaginas()) % this.totalPaginas();
  }

  irParaPagina(indice: number) {
    this.paginaAtual = indice;
  }

  get produtosPaginaAtual() {
    const inicio = this.paginaAtual * this.produtosPorPagina;
    return this.produtos.slice(inicio, inicio + this.produtosPorPagina);
  }
}
