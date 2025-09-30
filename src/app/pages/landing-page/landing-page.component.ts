import { Component } from '@angular/core';

import { HeaderComponent } from '../../components/principal/header/header.component'
import { FooterComponent } from '../../components/principal/footer/footer.component'
import { CarrosselComponent } from "../../components/carrossel/carrossel.component";
import { CarrosselMarcaComponent } from "./pages/carrossel-marca/carrossel-marca.component";
import { CardPromocaoComponent } from './card-promocao/card-promocao.component';
import { VistoRecenteComponent } from './visto-recente/visto-recente.component';
import { BotaoMenuComponent } from '../../components/principal/menu/botao-menu/botao-menu.component';
import { BotaoHeaderComponent } from "../../components/principal/botao-header/botao-header.component";

@Component({
  selector: 'app-landing-page',
  imports: [HeaderComponent, FooterComponent, CarrosselComponent, CarrosselMarcaComponent, CardPromocaoComponent, VistoRecenteComponent, BotaoMenuComponent, BotaoHeaderComponent],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.css'
})
export class LandingPageComponent {

}
