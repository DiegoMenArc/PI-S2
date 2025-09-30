import { Component, inject } from '@angular/core'; 
import { RouterLink } from '@angular/router';
import { UsuarioService } from '../../../../services/usuario.service'; 
import { CommonModule } from '@angular/common';
@Component({ 
    selector: 'app-botaomenu', 
    imports: [RouterLink, CommonModule], 
    templateUrl: './botao-menu.component.html', 
    styleUrl: './botao-menu.component.css' }) 
    
    export class BotaoMenuComponent { 
        
        submenuAberto = false;
        toggleSubmenu() {
        this.submenuAberto = !this.submenuAberto;

        }
    }

        