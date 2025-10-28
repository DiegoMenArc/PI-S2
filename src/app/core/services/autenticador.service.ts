import { Injectable } from '@angular/core';
import { Usuario } from '../types/types';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AutenticadorService {

  private readonly API = 'http://localhost:3000/usuarios'

  constructor(private http: HttpClient) { }

  private readonly storageKey = 'user';

  login(usuario: Usuario, senha: string ) {
    //vou arrumar isso aqui
  }

  logout() {
    localStorage.removeItem(this.storageKey);
  }

  isLoggedIn(): boolean {
    return localStorage.getItem(this.storageKey) !== null;
  }

  getUser() {
    const user = localStorage.getItem(this.storageKey);
    return user ? JSON.parse(user) : null;
  }

}
