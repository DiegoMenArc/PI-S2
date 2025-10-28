import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BuscaService {
  buscaAtual = "";

  atualizarBusca(busca:string){
    this.buscaAtual = busca;
  }
}
