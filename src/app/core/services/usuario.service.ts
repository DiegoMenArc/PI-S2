import { Injectable } from '@angular/core';
import { Usuario } from '../types/types';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})

export class UsuarioService {
  
  constructor(private http: HttpClient){}
  
    private readonly API = 'http://localhost:3000/usuarios'
  
    listarProdutos(): Observable<Usuario[]>{
      return this.http.get<Usuario[]>(this.API)
    }
  
    adiconarProduto(produto: Usuario): Observable<Usuario>{
      return this.http.post<Usuario>(this.API, produto)
    }
  
    removerProduto(id: number): Observable<Usuario>{
      return this.http.delete<Usuario>(`/${this.API}/${id}`)
    }
  
    editarProduto(produto: Usuario){
      const url = `${this.API}/${produto.id}`
      return this.http.put<Usuario>(this.API, url)
    }
  
    buscaId(id: number){
      return this.http.get<Usuario>(this.API+`/${id}`)
    }
}
