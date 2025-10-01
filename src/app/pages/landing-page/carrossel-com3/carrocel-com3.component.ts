import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardPadraoComponent } from '../../../components/card-padrao/card-padrao.component';

@Component({
  selector: 'app-carrocel-com3',
  imports: [CommonModule, CardPadraoComponent],
  templateUrl: './carrocel-com3.component.html',
  styleUrl: './carrocel-com3.component.css'
})
export class CarrocelCom3Component {

  produtos = [
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
  produtosPorPagina = 3;

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
