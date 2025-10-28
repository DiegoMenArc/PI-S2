import { Injectable } from '@angular/core';
import { Produto } from '../types/types';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {

  constructor(private http: HttpClient){}

  private readonly API = 'http://localhost:3000/produtos'

  listarProdutos(): Observable<Produto[]>{
    return this.http.get<Produto[]>(this.API)
  }

  adiconarProduto(produto: Produto): Observable<Produto>{
    return this.http.post<Produto>(this.API, produto)
  }

  removerProduto(id: number): Observable<Produto>{
    return this.http.delete<Produto>(`/${this.API}/${id}`)
  }

  editarProduto(produto: Produto){
    const url = `${this.API}/${produto.id}`
    return this.http.put<Produto>(this.API, url)
  }

  buscaId(id: number){
    return this.http.get<Produto>(this.API+`/${id}`)
  }
}
