import { Component, EventEmitter, inject, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { BuscaService } from '../../services/busca.service';

@Component({
  selector: 'app-busca',
  imports: [FormsModule, RouterLink],
  templateUrl: './busca.component.html',
  styleUrl: './busca.component.css'
})
export class BuscaComponent {
  _buscaService = inject(BuscaService) ;
  buscar = "";
  link = "";

  getInformacao(texto:string) :void{
    this._buscaService. atualizarBusca(texto);
  }


  pesquisar(busca:any){
    return `/busca/${busca.form.value.buscar}`;
  }
}
