import { Component } from '@angular/core';
import { CarrosselComponent } from '../../../../components/carrossel/carrossel.component';
import { AdmComponent } from "../../../adm/adm.component";

@Component({
  selector: 'app-carrossel-marca',
  imports: [CarrosselComponent, AdmComponent],  
  templateUrl: './carrossel-marca.component.html',
  styleUrl: './carrossel-marca.component.css'
  
})
export class CarrosselMarcaComponent {
imagens: string[] = [
    'img/image 24.png',
    'img/image 24.png',
    'img/image 24.png',
    'img/image 24.png'
  ];

  // Índice da imagem atual
  indiceAtual = 0;

  // Próxima imagem
  proximo(): void {
    this.indiceAtual = (this.indiceAtual + 1) % this.imagens.length;
  }

  // Imagem anterior
  anterior(): void {
    this.indiceAtual = (this.indiceAtual - 1 + this.imagens.length) % this.imagens.length;
  }
} 

