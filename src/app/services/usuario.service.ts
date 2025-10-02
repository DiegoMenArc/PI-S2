import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  usuario = "";

  fazerLogin() {
    this.usuario = "Valdir";
  }

  fazerLogout() {
    this.usuario = "";
  }

  estaLogado(): boolean {
    return this.usuario !== "";
  }
}
