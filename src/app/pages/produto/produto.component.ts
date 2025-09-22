import { Component } from '@angular/core';

import { HeaderComponent } from '../../components/principal/header/header.component'
import { FooterComponent } from '../../components/principal/footer/footer.component'
import { BreadcumbsComponent } from '../../components/principal/breadcumbs/breadcumbs.component'


@Component({
  selector: 'app-produto',
  imports: [HeaderComponent, FooterComponent, BreadcumbsComponent],
  templateUrl: './produto.component.html',
  styleUrl: './produto.component.css'
})
export class ProdutoComponent {
  page = ["home","produto"]


  qtd = 1;

  nome_prod = "Casinha de Brinquedo"
  preco = 50.00
  desc = "Uma casa de brinquedo bacana para as suas crianças entrarem no mundo da imaginação"
}


