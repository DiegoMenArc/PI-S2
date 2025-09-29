import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  icones = [
    {
      caminho:"icons/insta.svg",
      desc:"instagram"
    },
    {
      caminho:"icons/linkedin.svg",
      desc:"linkedin"
    },
    {
      caminho:"icons/facebook.svg",
      desc:"facebook"
    },
    {
      caminho:"icons/x.svg",
      desc:"X"
    }
  ]

  pagamentos = [
    {
      caminho:"img/visa.png",
      desc:"visa"
    },
    {
      caminho:"img/paypal.png",
      desc:"paypal"
    },
    {
      caminho:"img/apple.png",
      desc:"apple"
    },
    {
      caminho:"img/google.png",
      desc:"google"
    }
  ]

  arroba = "@";

  links = ["Sobre nós", "Acessibilidade", "Ajuda", "Perguntas Frequentes"]
}
