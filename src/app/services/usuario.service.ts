import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  usuario = "";

  fazerLogin(usuario:string) {
    this.usuario = usuario;
  }

  fazerLogout() {
    this.usuario = "";
  }

  estaLogado(): boolean {
    return this.usuario !== "";
  }
}
