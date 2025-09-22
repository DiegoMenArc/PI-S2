import { Component } from '@angular/core';
import { BreadcumbsComponent } from '../../../../components/principal/breadcumbs/breadcumbs.component'


@Component({
  selector: 'app-prodMain',
  imports: [BreadcumbsComponent],
  templateUrl: './prod-main.component.html',
  styleUrl: './prod-main.component.css'
})
export class ProdMainComponent {
  page = ["home","produto"]


  qtd = 1;

  nome_prod = "Casinha de Brinquedo"
  preco = 50.00
  desc = "Uma casa de brinquedo bacana para as suas crianças entrarem no mundo da imaginação"
}
