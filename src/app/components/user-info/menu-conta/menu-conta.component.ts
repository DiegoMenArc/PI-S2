import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Usuario } from '../../../core/types/types';
import { AutenticadorService } from '../../../core/services/autenticador.service';
import { Router } from '@angular/router';
import { UsuarioService } from '../../../core/services/usuario.service';

@Component({
  selector: 'app-menu-conta',
  imports: [],
  templateUrl: './menu-conta.component.html',
  styleUrl: './menu-conta.component.css'
})
export class MenuContaComponent{

  @Input() username: String = "";
  @Output() logoutClick = new EventEmitter<void>()

  opcoes:String[] = ["Sua Área", "Meus Pedidos", "Seus dados", "Configurações", "Sair"];
  opcoesIcon:String[] = [
    '', 
    '',
    '/public/icons/adm/logout-icon.svg',
    '/public/icons/config-branco-icon.svg'
  ];

  onLogout(){
    this.logoutClick.emit()
  }

}
