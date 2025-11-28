import { Component, Output, EventEmitter, inject } from '@angular/core';
import { BuscaComponent } from '../../busca/busca.component';
import { BotaoHeaderComponent } from '../botao-header/botao-header.component';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { UsuarioService } from '../../../core/services/usuario.service';
import { CommonModule } from '@angular/common';
import { AutenticadorService } from '../../../core/services/autenticador.service';
import { Usuario } from '../../../core/types/types';

@Component({
  selector: 'app-header',
  imports: [BuscaComponent, BotaoHeaderComponent, RouterLink, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  private rota: String = ''
  private user!: Usuario

  constructor(private active: ActivatedRoute, private auth: AutenticadorService, private serv: UsuarioService) {
    this.user = this.auth.getUser();

    if (this.user != null) {
      if (this.user.user_role === "/adm/produto") {
        this.rota = '/adm/produto';
      } else {
        this.rota = '/perfil';
      }
    } else {
      this.rota = '/cadastro';
    }
  }

  @Output() abrirMenuEvent = new EventEmitter<void>();

  elementos = [
    { nome: 'Ofertas' },
    { nome: 'Categoria' },
    { nome: 'Mais Acessados' },
    { nome: 'Novidades' },
    { nome: 'Colecionaveis' },
    { nome: 'Franquias' }
  ];

  caminho() {
    return this.rota;
  }
}