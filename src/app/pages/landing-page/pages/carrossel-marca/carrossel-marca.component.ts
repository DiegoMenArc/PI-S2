import { Component } from '@angular/core';
import { CarrosselComponent } from '../../../../components/carrossel/carrossel.component';
import { AdmComponent } from "../../../adm/adm.component";

@Component({
  selector: 'app-carrossel-marca',
  imports: [CarrosselComponent, AdmComponent],  
  templateUrl: './carrossel-marca.component.html',
  styleUrl: './carrossel-marca.component.css'
  
})
export class CarrosselMarcaComponent {

}
