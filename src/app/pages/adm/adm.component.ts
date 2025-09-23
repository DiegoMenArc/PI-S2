import { Component } from '@angular/core';
import { AdmHeaderComponent } from '../../components/ADM/adm-header/adm-header.component';
import { NavComponent } from '../../components/ADM/nav/nav.component';
import { AdmElementsComponent } from '../../components/ADM/adm-elements/adm-elements.component';

@Component({
  selector: 'app-adm',
  imports: [ AdmHeaderComponent, NavComponent, AdmElementsComponent],
  templateUrl: './adm.component.html',
  styleUrl: './adm.component.css'
})
export class AdmComponent {

}
