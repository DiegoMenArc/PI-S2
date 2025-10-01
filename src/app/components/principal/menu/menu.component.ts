import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common'; // Importe CommonModule
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-menu',
    standalone: true,
    imports: [CommonModule, RouterLink], // Adicione CommonModule aqui
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.css']
})
export class MenuComponent {
    @Input() visivel: boolean = false; // Recebe o estado do componente pai
    @Output() fecharMenu = new EventEmitter<void>(); // Emite evento para fechar

    submenuAberto = false; // Estado para o submenu interno

    toggleSubmenu() {
        this.submenuAberto = !this.submenuAberto;
    }

    // Você pode adicionar um método para fechar o menu
    // por exemplo, clicando fora dele.
    fechar() {
        this.fecharMenu.emit();
    }
}