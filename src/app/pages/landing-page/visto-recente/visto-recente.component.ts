import { Component} from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardPadraoComponent } from '../../../components/card-padrao/card-padrao.component';

@Component({
  selector: 'app-visto-recente',
  imports: [CommonModule, CardPadraoComponent],
  templateUrl: './visto-recente.component.html',
  styleUrl: './visto-recente.component.css'
})
export class VistoRecenteComponent {

produtos = [
    { imagem: 'assets/produto1.jpg', nome: 'Tênis Esportivo', preco: 'R$ 199,90' },
    { imagem: 'assets/produto2.jpg', nome: 'Fone Bluetooth', preco: 'R$ 149,90' },
    { imagem: 'assets/produto3.jpg', nome: 'Smartwatch', preco: 'R$ 299,90' },
    { imagem: 'assets/produto4.jpg', nome: 'Mochila Casual', preco: 'R$ 89,90' },
    { imagem: 'assets/produto5.jpg', nome: 'Camiseta Premium', preco: 'R$ 59,90' }
  ];

  indiceAtual = 0;

  proximo() {
    this.indiceAtual = (this.indiceAtual + 1) % this.produtos.length;
  }

  anterior() {
    this.indiceAtual = (this.indiceAtual - 1 + this.produtos.length) % this.produtos.length;
  }

  irPara(indice: number) {
    this.indiceAtual = indice;
  }

  get transformStyle() {
    return `translateX(-${this.indiceAtual * 100}%)`;
  }
}
