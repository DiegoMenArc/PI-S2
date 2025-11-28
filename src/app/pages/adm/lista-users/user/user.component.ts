import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../../../core/types/types';
import { UsuarioService } from '../../../../core/services/usuario.service';
import { AutenticadorService } from '../../../../core/services/autenticador.service';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { NavComponent } from "../../../../components/ADM/nav/nav.component";
import { AdmHeaderComponent } from "../../../../components/ADM/adm-header/adm-header.component";


@Component({
  selector: 'app-user',
  imports: [NavComponent, AdmHeaderComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent implements OnInit {

  id: any

  private readonly API = 'http://localhost:3000/usuarios'

  constructor(private serv: UsuarioService, private auth: AutenticadorService, private active: ActivatedRoute){
    this.id = this.active.children[0]
  }

  user!: Usuario

  ngOnInit(): void {
    this.serv.buscaId(this.id);
  }
}
