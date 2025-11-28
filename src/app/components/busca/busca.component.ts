import { Component, EventEmitter, inject, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-busca',
  imports: [FormsModule],
  templateUrl: './busca.component.html',
  styleUrl: './busca.component.css'
})
export class BuscaComponent {
  constructor(
    private rota:Router
  ){}
  buscar = "";
  link = "";

  pesquisar(busca:string){
    this.rota.navigate(["busca",busca]);  
  }
}
