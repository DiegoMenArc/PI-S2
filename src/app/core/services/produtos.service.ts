import { Injectable } from '@angular/core';
import { Produto } from '../types/types';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})


//todos o processo ta explicado no usuario.service


export class ProdutosService {

  constructor(private http: HttpClient){}

  private readonly API = 'http://localhost:3000/produtos'

  listarProdutos(): Observable<Produto[]>{
    return this.http.get<Produto[]>(this.API)
  }

  adiconarProduto(produto: Produto): Observable<Produto>{
    return this.http.post<Produto>(this.API, produto)
  }

  removerProduto(id: string): Observable<Produto>{
    return this.http.delete<Produto>(`${this.API}/${id}`)
  }

  editarProduto(produto: Produto){
    const url = `${this.API}/${produto.id}`
    return this.http.put<Produto>(url, produto)
  }

  buscaId(id: number){
    return this.http.get<Produto>(this.API+`/${id}`)
  }
}
