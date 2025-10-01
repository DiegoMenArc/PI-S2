import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

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

    toggleSubmenu() {
        this.submenuAberto = !this.submenuAberto;
    }

    fechar() {
        // Este método é chamado quando o botão 'X' ou o overlay são clicados.
        // Ele emite o evento 'fecharMenu' para o componente pai (HeaderComponent).
        this.fecharMenu.emit();
    }
}