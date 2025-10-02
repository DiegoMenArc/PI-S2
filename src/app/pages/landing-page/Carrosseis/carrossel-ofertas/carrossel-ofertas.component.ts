import { Component } from '@angular/core';
import { CarrocelCom3Component } from '../carrossel-com3/carrocel-com3.component';
import { CardPadraoComponent } from '../../../../components/card-padrao/card-padrao.component';

@Component({
  selector: 'app-carrossel-ofertas',
  imports: [CarrocelCom3Component, CardPadraoComponent],
  templateUrl: './carrossel-ofertas.component.html',
  styleUrl: './carrossel-ofertas.component.css'
})
export class CarrosselOfertasComponent {

}
