import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { MenuHeaderComponent } from '../../components/principal/menu-header/menu-header.component';
import { FooterComponent } from '../../components/principal/footer/footer.component';
// import { CarrosselComponent } from "../../components/carrossel/carrossel.component";
import { CardPromocaoComponent } from '../../components/cards/card-promocao/card-promocao.component';
// import { BotaoMenuComponent } from '../../components/principal/menu/botao-menu/botao-menu.component';
// import { BotaoHeaderComponent } from '../../components/principal/botao-header/botao-header.component';

import { CategoriasComponent } from '../../components/principal/categorias/categorias.component';
import { CarrosselComponent } from '../../components/principal/carrossel/carrossel.component';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-landing-page',
  imports: [
    // MenuHeaderComponent,
    FooterComponent,
    CarrosselComponent,
    CardPromocaoComponent,
    // BotaoMenuComponent,
    // BotaoHeaderComponent,
    CommonModule,
    CategoriasComponent,
    RouterLink
],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.css'
})
export class LandingPageComponent {

}
