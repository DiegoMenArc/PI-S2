import { Component } from '@angular/core';

@Component({
  selector: 'app-card-promocao',
  imports: [],
  templateUrl: './card-promocao.component.html',
  styleUrls: [
    './card-promocao.component.css',
  ],
})
export class CardPromocaoComponent {

  imagens: string[] = [
    '/img/furbies.jpg',
    '/img/logo.png',
    '/img/furbies.jpg',
    '/img/logo.png',
    '/img/furbies.jpg',
    '/img/logo.png'
  ];

  indiceAtual = 0;
  private intervaloId: any;

  ngOnInit(): void {
    // Troca de imagem a cada 3 segundos
    this.intervaloId = setInterval(() => {
      this.proximo();
    }, 3000);
  }

  ngOnDestroy(): void {
    if (this.intervaloId) {
      clearInterval(this.intervaloId);
    }
  }

  proximo(): void {
    this.indiceAtual = (this.indiceAtual + 1) % this.imagens.length;
  }

}
