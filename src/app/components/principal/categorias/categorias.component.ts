import { Component } from '@angular/core';



@Component({
  selector: 'app-categorias',
  imports: [],
  templateUrl: './categorias.component.html',
  styleUrl: './categorias.component.css',
})
export class CategoriasComponent {
  categorias: string[] = [
    "Peões",
    "Bonecas",
    "Carrinhos",
    "Quebra-Cabeças",
    "Jogos de Tabuleiro",
    "Pelúcias",
    "Lego / Blocos de Montar",
    "Super-Heróis",
    "Brinquedos Educativos",
    "Instrumentos Musicais",
    "Brinquedos Eletrônicos",
    "Carrinho de Controle Remoto",
    "Massinha / Slime",
    "Dinossauros",
    "Cozinha Infantil",
    "Ferramentas de Brinquedo",
    "Aviões",
    "Robôs",
    "Fantasy / Fantasias",
    "Brinquedos para Bebês"
  ];

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
