import { Component, Input, Output, EventEmitter, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { UsuarioService } from '../../../services/usuario.service'; // ajuste o caminho conforme sua pasta

@Component({
    selector: 'app-menu',
    standalone: true,
    imports: [CommonModule, RouterLink],
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.css']
})
export class MenuComponent {
    @Input() visivel: boolean = false;
    @Output() fecharMenu = new EventEmitter<void>();

    submenuAberto = false;

    // injetando o serviço
    _usuarioAtual = inject(UsuarioService);

    toggleSubmenu() {
        this.submenuAberto = !this.submenuAberto;
    }

    fechar() {
        this.fecharMenu.emit();
    }

    get usuarioLogado() {
        return this._usuarioAtual.usuario;
    }
}
