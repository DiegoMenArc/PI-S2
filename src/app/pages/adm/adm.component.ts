import { Component } from '@angular/core';
import { AdmHeaderComponent } from '../../components/ADM/adm-header/adm-header.component';
import { NavComponent } from '../../components/ADM/nav/nav.component';
import { ListaPrdComponent } from '../../components/ADM/lista-prd/lista-prd.component';

@Component({
  selector: 'app-adm',
  imports: [ AdmHeaderComponent, NavComponent, ListaPrdComponent],
  templateUrl: './adm.component.html',
  styleUrl: './adm.component.css'
})
export class AdmComponent {

}
