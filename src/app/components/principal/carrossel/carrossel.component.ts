import { Component } from '@angular/core';
import { CardPadraoComponent } from '../../cards/card-padrao/card-padrao.component';
import { CommonModule } from '@angular/common';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { ProdutosService } from '../../../core/services/produtos.service';
import { Produto } from '../../../core/types/types';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-carrossel',
  standalone: true,
  imports: [CardPadraoComponent, CommonModule, SlickCarouselModule, RouterLink],
  templateUrl: './carrossel.component.html',
  styleUrl: './carrossel.component.css'
})
export class CarrosselComponent {

listarProduto:Produto[] = [];

    constructor(
      private service: ProdutosService
    ){}

    ngOnInit(): void {
      this.service.listarProdutos().subscribe((produto)=>{
        this.listarProduto = produto;
      });
    }
  slideConfig = {
    "slidesToShow": 6,
    "slidesToScroll": 6,
    "arrows": true,
    "autoplay":true,
    "autoplaySpeed": 5000,
    "pauseOnHover": true,
    "infinite": true,

    "responsive" : [{
      "breakpoint" : 1730,
      "settings": {
        "arrows": true,
        "infinite": true,
        "slidesToShow": 5,
        "slidesToScroll": 5
      }
    },
    {
      "breakpoint" : 1500,
      "settings": {
        "arrows": true,
        "infinite": true,
        "slidesToShow": 4,
        "slidesToScroll": 4
      }
    },
    {
      "breakpoint" : 992,
      "settings": {
        "arrows": true,
        "infinite": true,
        "slidesToShow": 3,
        "slidesToScroll": 3
      }
    },
    {
      "breakpoint" : 768,
      "settings": {
        "arrows": true,
        "infinite": true,
        "slidesToShow": 1,
        "slidesToScroll": 1
      }
    }]
  };

}
