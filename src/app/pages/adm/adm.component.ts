import { Component } from '@angular/core';
import { AdmHeaderComponent } from '../../components/ADM/adm-header/adm-header.component';
import { NavComponent } from '../../components/ADM/nav/nav.component';
import { ListaPrdComponent } from '../../components/ADM/lista-prd/lista-prd.component';
import { BreadcumbsComponent } from "../../components/principal/breadcumbs/breadcumbs.component";

@Component({
  selector: 'app-adm',
  imports: [AdmHeaderComponent, NavComponent, ListaPrdComponent, BreadcumbsComponent],
  templateUrl: './adm.component.html',
  styleUrl: './adm.component.css'
})
export class AdmComponent {
  paginas:String[ ] = ["Produtos"];
}
