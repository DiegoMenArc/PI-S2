import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AutenticadorService } from '../../../core/services/autenticador.service';
import { UsuarioService } from '../../../core/services/usuario.service';
import { Usuario } from '../../../core/types/types';
import { HeaderComponent } from '../../../components/principal/header/header.component';
import { FooterComponent } from '../../../components/principal/footer/footer.component';
import { MenuContaComponent } from '../../../components/user-info/menu-conta/menu-conta.component';
import { DadosUserComponent } from '../../../components/user-info/dados-user/dados-user.component';

@Component({
  selector: 'app-perfil-user',
  imports: [HeaderComponent, FooterComponent, MenuContaComponent, DadosUserComponent],
  templateUrl: './perfil-user.component.html',
  styleUrl: './perfil-user.component.css'
})
export class PerfilUserComponent {
  user: Usuario | undefined
  username: String = ''
  constructor(private auth: AutenticadorService, private serv: UsuarioService, private router: Router){}

  ngOnInit(): void {
    this.user = this.auth.getUser();
    this.username = this.user?.nome ?? '';
  }
}
