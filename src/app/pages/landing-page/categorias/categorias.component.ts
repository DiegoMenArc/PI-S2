import { Component } from '@angular/core';



@Component({
  selector: 'app-categorias',
  imports: [],
  templateUrl: './categorias.component.html',
  styleUrl: './categorias.component.css',
})
export class CategoriasComponent 
{
  paginaAtual = 0;

  proximo() {
    if (this.paginaAtual < 1) {
      this.paginaAtual++;
    }
  }

  anterior() {
    if (this.paginaAtual > 0) {
      this.paginaAtual--;
    }
  }
}
