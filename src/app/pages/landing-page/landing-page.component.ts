import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { MenuHeaderComponent } from '../../components/principal/menu-header/menu-header.component';
import { FooterComponent } from '../../components/principal/footer/footer.component';
// import { CarrosselComponent } from "../../components/carrossel/carrossel.component";
import { CarrosselMarcaComponent } from "./Carrosseis/carrossel-marca/carrossel-marca.component";
import { CardPromocaoComponent } from './card-promocao/card-promocao.component';
import { VistoRecenteComponent } from './visto-recente/visto-recente.component';
// import { BotaoMenuComponent } from '../../components/principal/menu/botao-menu/botao-menu.component';
// import { BotaoHeaderComponent } from '../../components/principal/botao-header/botao-header.component';
import { CarrosselOfertasComponent } from './Carrosseis/carrossel-ofertas/carrossel-ofertas.component';
import { CarrosselMaisAcessadosComponent } from './Carrosseis/carrossel-mais-acessados/carrossel-mais-acessados.component';
import { MaisVendidosComponent } from './Carrosseis/mais-vendidos/mais-vendidos.component';
import { CarrocelSeuHistoricoComponent } from './Carrosseis/carrossel-seu-historico/carrossel-seu-historico.component';
import { CategoriasComponent } from './categorias/categorias.component';

@Component({
  selector: 'app-landing-page',
  imports: [
    // MenuHeaderComponent,
    FooterComponent,
    // CarrosselComponent,
    CarrosselMarcaComponent,
    CardPromocaoComponent,
    VistoRecenteComponent,
    // BotaoMenuComponent,
    // BotaoHeaderComponent,
    CommonModule,
    CarrosselOfertasComponent,
    CarrosselMaisAcessadosComponent,
    MaisVendidosComponent,
    CarrocelSeuHistoricoComponent,
    CategoriasComponent,
    // Importação correta aqui
  ],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.css'
})
export class LandingPageComponent {

}
