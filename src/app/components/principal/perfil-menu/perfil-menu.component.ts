import { Component } from '@angular/core';

@Component({
  selector: 'app-perfil-menu',
  imports: [],
  templateUrl: './perfil-menu.component.html',
  styleUrl: './perfil-menu.component.css'
})
export class PerfilMenuComponent {
  opcoes: String[] = ['Dados Pessoais', 'Histórico', 'Endereços', 'Cartões', 'Favoritos']
}
