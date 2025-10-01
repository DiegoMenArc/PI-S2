import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Importação correta do CommonModule

import { HeaderComponent } from '../../components/principal/header/header.component';
import { FooterComponent } from '../../components/principal/footer/footer.component';
import { CarrosselComponent } from "../../components/carrossel/carrossel.component";
import { CarrosselMarcaComponent } from "./pages/carrossel-marca/carrossel-marca.component";
import { CardPromocaoComponent } from './card-promocao/card-promocao.component';
import { VistoRecenteComponent } from './visto-recente/visto-recente.component';
import { BotaoMenuComponent } from '../../components/principal/menu/botao-menu/botao-menu.component';
import { BotaoHeaderComponent } from '../../components/principal/botao-header/botao-header.component';
import { CarrosselOfertasComponent } from './carrossel-ofertas/carrossel-ofertas.component';

@Component({
  selector: 'app-landing-page',
  // Substitua a importação do NgIf pelo CommonModule
  imports: [
    HeaderComponent,
    FooterComponent,
    CarrosselComponent,
    CarrosselMarcaComponent,
    CardPromocaoComponent,
    VistoRecenteComponent,
    BotaoMenuComponent,
    BotaoHeaderComponent,
    CommonModule,
    CarrosselOfertasComponent,
    // Importação correta aqui
  ],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.css'
})
export class LandingPageComponent {
  mostrarCard: boolean = false; // começa oculto

  // função que vai ser chamada pelos botões do header
  toggleCard() {
    this.mostrarCard = !this.mostrarCard;
  }

  // se você quiser só abrir e fechar separadamente:
  abrirCard() {
    this.mostrarCard = true;
  }

  fecharCard() {
    this.mostrarCard = false;
  }
}