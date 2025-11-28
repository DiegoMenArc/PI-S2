import { Injectable } from '@angular/core';
import { Usuario } from '../types/types';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class UsuarioService {

  constructor(private http: HttpClient) { }
  //a gente precisa acessar o db.json, e pra isso serve esse constructor, chamar o json atraves do http

  private readonly API = 'http://localhost:3000/usuarios'
  //a api referencia o banco de dados db.json no backend
  //pra inicializar o db.json, vai na pasta backend e dá o comando -> npx json-server db.json
  //sempre que a gente vai mexer com o banco de dados a gente chama o this.http

  listarUser(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(this.API)
    //pega um array de objetos dentro da Api
  }

  adiconarUser(user: Usuario): Observable<Usuario> {
    return this.http.post<Usuario>(this.API, user)
    //a gente "posta" um usuario na Api
    //a sintaxe é: http.post< O tipo de objeto que você vai colocar > (aonde, objeto que vai ser colocado (ele é o parametro da função)  ) 
  }

  removerUser(id: number): Observable<Usuario> {
    return this.http.delete<Usuario>(`/${this.API}/${id}`)
    //aqui é mais fácil, você dá o id como parametro e ele deleta, a sintace dos paranteses pode mudar dependendo do comando
  }

  editarUser(user: Usuario): Observable<Usuario> {
    const url = `${this.API}/${user.id}`;
    //essa função recebe o objeto já editado, então, pega o id desse objeto e acessa o correspondente dele no banco de dados atraves da url
    //a gente precisa da url porque você apenas passa um objeto qualquer

    return this.http.put<Usuario>(url, user);
    //o comando put altera o objeto com o id igual ao do que foi passado como parametro
  }

  buscaId(id: number): Observable<Usuario> {
    return this.http.get<Usuario>(this.API + `/${id}`)
    //não tenho que explicar
  }


  login(usuario: Usuario) {
    usuario.log = true
    localStorage.setItem("User", "logado")
  }

  usuario = ""

  fazerLogin(User: string) {
    this.usuario = User;
  }

  fazerLogout() {
    this.usuario = "";
  }
}
