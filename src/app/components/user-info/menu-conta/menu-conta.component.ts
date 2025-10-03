import { Component } from '@angular/core';

@Component({
  selector: 'app-menu-conta',
  imports: [],
  templateUrl: './menu-conta.component.html',
  styleUrl: './menu-conta.component.css'
})
export class MenuContaComponent {
  opcoes:String[] = ["Sua Área", "Meus Pedidos", "Seus dados", "Configurações", "Sair"];

  opcoesIcon:String[] = [
    '', 
    '',
    '/public/icons/adm/logout-icon.svg',
    '/public/icons/config-branco-icon.svg'
  ];

  username:String = "Glauber";
}
