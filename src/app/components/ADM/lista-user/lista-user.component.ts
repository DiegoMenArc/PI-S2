import { Component } from '@angular/core';
import { BreadcumbsComponent } from '../../principal/breadcumbs/breadcumbs.component';
import { UsuarioService } from '../../../core/services/usuario.service';
import { Usuario } from '../../../core/types/types';
import { Router, RouterLink } from '@angular/router';
import { BuscaComponent } from '../../busca/busca.component';

@Component({
  selector: 'app-lista-user',
  imports: [BreadcumbsComponent, RouterLink],
  templateUrl: './lista-user.component.html',
  styleUrl: './lista-user.component.css'
})
export class ListaUserComponent {
  tipos = ["ID","Nome", "Sobrenome", "Email", "Endereco", "Ações"]
  users: Usuario[] = []
  aviso = ""
  
  constructor(private serv: UsuarioService, private router: Router, ){
    this.serv.listarUser().subscribe((usuarios) =>{
      if(usuarios){
        this.users = usuarios
      }else{
        this.aviso = "sem usuarios"
      }
    })
  }

  getEdit(id: number){
    this.router.navigate([`user:${id}`]);
  }

  removerUser(id: number){
    this.serv.removerUser(id)
  }

  setAll(){
    
  }
}
