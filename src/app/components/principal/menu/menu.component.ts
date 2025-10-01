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
        this.fecharMenu.emit();
    }
}