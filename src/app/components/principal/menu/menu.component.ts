import { Component, Input, Output, EventEmitter, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { UsuarioService } from '../../../core/services/usuario.service';
import { AutenticadorService } from '../../../core/services/autenticador.service';
import { Usuario } from '../../../core/types/types';

@Component({
    selector: 'app-menu',
    standalone: true,
    imports: [CommonModule, RouterLink],
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.css']
})


export class MenuComponent implements OnInit {

    constructor(private auth: AutenticadorService, private serv: UsuarioService, private router: Router) { }

    @Input() visivel: boolean = false;
    @Output() fecharMenu = new EventEmitter<void>();

    submenuAberto = false;
    user!: Usuario
    usuarioLogado: String = ''

    toggleSubmenu() {
        this.submenuAberto = !this.submenuAberto;
    }

    fechar() {
        this.fecharMenu.emit();
    }

    logout() {
        this.auth.logout();
        this.fechar();
        this.router.navigate(['/login'])
    }

    clicarCadastro() {
        this.router.navigate(['/cadastro']);
    }

    ngOnInit():void{
        this.user = this.auth.getUser()

        if(!this.user){
            this.usuarioLogado = 'Seja bem-vindo'
        }else{
            this.usuarioLogado = this.user.nome
        }
    }
}
