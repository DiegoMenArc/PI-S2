import { Injectable } from '@angular/core';
import { Usuario } from '../types/types';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AutenticadorService {

  constructor(private http: HttpClient) { }

  private readonly API = 'http://localhost:3000/usuarios';

  private readonly storageKey = 'user';

  user: Usuario | undefined

  login(email: string, senha: string): Observable<Usuario | null> {
    return this.http.get<Usuario[]>(`${this.API}?email=${email}&senha=${senha}`).pipe(
      map((usuarios: Usuario[]) => {
        //mapeia todos os usuarios que atendem ao parametro {user} e {senha}
        if (usuarios.length > 0) {
          //maior que 0 significa que o user existe
          const user = usuarios[0];
          //define a variavel usuario como o primeiro user que achar que atenda os parametros
          // salva no localStorage
          this.salvarUser(user);
          return user;
        }
        return null;
      })
    )
  }

  private salvarUser(user: Usuario) {
    localStorage.setItem(this.storageKey, JSON.stringify(user));
  }

  logout() {
    localStorage.removeItem(this.storageKey);
  }

  taLogado(): boolean {
    return localStorage.getItem(this.storageKey) !== null;
  }

  getUser() {
    const user = localStorage.getItem(this.storageKey);
    return user ? JSON.parse(user) : null;
  }
}
