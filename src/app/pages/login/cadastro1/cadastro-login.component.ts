import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router'; // Necessário para rotas filhas

// Imports desnecessários (ActivatedRoute, FormsModule, CardCadastroComponent) removidos
// pois eles devem ser usados no componente filho.

@Component({
  selector: 'app-cadastro-login',
  // Usa apenas o RouterOutlet para injetar o componente filho
  imports: [ RouterOutlet ], 
  templateUrl: './cadastro-login.component.html',
  styleUrl: './cadastro-login.component.css'
})
export class CadastroLoginComponent {
    // Esta classe não precisa de lógica de rota (constructor) ou inputs.
    // Ela apenas contém a estrutura visual.
}