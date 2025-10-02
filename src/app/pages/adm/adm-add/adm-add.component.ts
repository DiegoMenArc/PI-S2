import { Component } from '@angular/core';
import { AdmHeaderComponent } from '../../../components/ADM/adm-header/adm-header.component';
import { NavComponent } from '../../../components/ADM/nav/nav.component';
import { ListaPrdComponent } from '../../../components/ADM/lista-prd/lista-prd.component';
import { BreadcumbsComponent } from '../../../components/principal/breadcumbs/breadcumbs.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-adm-add',
  imports: [ AdmHeaderComponent, NavComponent, ListaPrdComponent, BreadcumbsComponent, FormsModule],
  templateUrl: './adm-add.component.html',
  styleUrl: './adm-add.component.css'
})
export class AdmAddComponent {
  paginas = ["Produtos", "adicionarProduto"];

  usuario = "B a c a n a";
}
