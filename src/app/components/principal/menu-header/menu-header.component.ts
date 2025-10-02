import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

import { HeaderComponent } from '../header/header.component';
import { MenuComponent } from '../menu/menu.component';

@Component({
  selector: 'app-menu-header',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HeaderComponent, MenuComponent],
  templateUrl: './menu-header.component.html',
  styleUrl: './menu-header.component.css'
})
export class MenuHeaderComponent {
  
  menuAberto: boolean = false;

  abrirMenu() {
    this.menuAberto = true;
  }

  fecharMenu() {
    this.menuAberto = false;
  }
}