import { Component } from '@angular/core';
import { CardPadraoComponent } from '../card-padrao/card-padrao.component';
import { CommonModule } from '@angular/common';
import { SlickCarouselModule } from 'ngx-slick-carousel';

@Component({
  selector: 'app-carrossel',
  standalone: true,
  imports: [CardPadraoComponent, CommonModule, SlickCarouselModule],
  templateUrl: './carrossel.component.html',
  styleUrl: './carrossel.component.css'
})
export class CarrosselComponent {
  slides = [
    {img: "http://placehold.it/350x150/000000"},
    {img: "http://placehold.it/350x150/111111"},
    {img: "http://placehold.it/350x150/333333"},
    {img: "http://placehold.it/350x150/333333"},
    {img: "http://placehold.it/350x150/333333"},
    {img: "http://placehold.it/350x150/333333"},
    {img: "http://placehold.it/350x150/333333"},
    {img: "http://placehold.it/350x150/333333"},
    {img: "http://placehold.it/350x150/333333"},
    {img: "http://placehold.it/350x150/666666"}
  ];

  slideConfig = {
    "slidesToShow": 4,
    "slidesToScroll": 4,
    "arrows": true,
    "autoplay":true,
    "autoplaySpeed": 5000,
    "pauseOnHover": true,
    "infinite": true,

    "responsive" : [{
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
