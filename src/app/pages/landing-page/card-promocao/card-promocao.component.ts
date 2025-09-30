import { Component } from '@angular/core';

@Component({
  selector: 'app-card-promocao',
  imports: [],
  templateUrl: './card-promocao.component.html',
  styleUrl: './card-promocao.component.css'
})
export class CardPromocaoComponent {

   imagens: string[] = [
    '/img/image 24.png',
    '/img/logo.png',
    '/img/image 24.png',
    '/img/logo.png',
    '/img/image 24.png',
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
