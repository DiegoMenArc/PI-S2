import { Component } from '@angular/core';
import { CarrosselComponent } from '../../../../components/carrossel/carrossel.component';
import { CardPadraoComponent } from '../../../../components/card-padrao/card-padrao.component';
import { AdmComponent } from "../../../adm/adm.component";

@Component({
  selector: 'app-carrossel-marca',
  imports: [CarrosselComponent, CardPadraoComponent, AdmComponent],  
  templateUrl: './carrossel-marca.component.html',
  styleUrl: './carrossel-marca.component.css'
  
})
export class CarrosselMarcaComponent {
nom: string[] = [
    '/img/image 24.png',
    '/img/logo.png',
    'assets/img3.jpg',
    'assets/img4.jpg'

    
  ];

  // Índice da imagem atual
  indiceAtual = 0;

  // Próxima imagem
  proximo(): void {
    this.indiceAtual = (this.indiceAtual + 1) % this.nom.length;
  }

  // Imagem anterior
  anterior(): void {
    this.indiceAtual = (this.indiceAtual - 1 + this.nom.length) % this.nom.length;
  }
} 

