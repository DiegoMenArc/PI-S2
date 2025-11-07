import { Component } from '@angular/core';
import { HeaderComponent } from "../../../components/principal/header/header.component";
import { FooterComponent } from "../../../components/principal/footer/footer.component";
import { PerfilMenuComponent } from "../../../components/principal/perfil-menu/perfil-menu.component";
import { ListaDesejoCardComponent } from '../../../components/cards/lista-desejo-card/lista-desejo-card.component';

@Component({
  selector: 'app-lista-desejo',
  imports: [HeaderComponent, FooterComponent, PerfilMenuComponent, ListaDesejoCardComponent],
  templateUrl: './lista-desejo.component.html',
  styleUrl: './lista-desejo.component.css'
})
export class ListaDesejoComponent {

}
