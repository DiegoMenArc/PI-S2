import { Component, Input, Output, EventEmitter, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
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

    constructor(private auth: AutenticadorService, private serv: UsuarioService) { }

    @Input() visivel: boolean = false;
    @Output() fecharMenu = new EventEmitter<void>();

    submenuAberto = false;
    router: any;
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
