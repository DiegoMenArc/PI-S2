import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProdutosService } from './produtos.service';
import { HttpClient } from '@angular/common/http';
import { Produto } from '../types/types';

@Injectable({
  providedIn: 'root'
})
export class BuscaService {

  private readonly API = 'http://localhost:3000/produtos'
  
  constructor(prod: ProdutosService, private http: HttpClient){}

  buscaAtual = "";

  atualizarBusca(busca:string){
    this.buscaAtual = busca;
  }

  buscaNome(nome: String): Observable<any[]>{
    return this.http.get<Produto[]>(`${this.API}/${nome}`)
  }
}
