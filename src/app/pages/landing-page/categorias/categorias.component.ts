import { Component } from '@angular/core';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.css'],
})
export class CategoriasComponent {
  paginaAtual = 1; // começamos na primeira página real
  totalPaginas = 2; // número de páginas reais
  transition = 'transform 0.6s ease-in-out';

  proximo() {
    this.paginaAtual++;
  }

  anterior() {
    this.paginaAtual--;
  }

  ajustarLoop() {
    // Se passou do último clone → volta para primeira real
    if (this.paginaAtual > this.totalPaginas) {
      this.transition = 'none';
      this.paginaAtual = 1;
      setTimeout(() => (this.transition = 'transform 0.6s ease-in-out'));
    }

    // Se passou do clone inicial → volta para última real
    if (this.paginaAtual === 0) {
      this.transition = 'none';
      this.paginaAtual = this.totalPaginas;
      setTimeout(() => (this.transition = 'transform 0.6s ease-in-out'));
    }
  }
}
