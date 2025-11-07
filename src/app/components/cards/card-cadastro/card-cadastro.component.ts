import { Component } from '@angular/core';
import { UsuarioService } from '../../../core/services/usuario.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-card-cadastro',
  imports: [],
  templateUrl: './card-cadastro.component.html',
  styleUrl: './card-cadastro.component.css'
})
export class CardCadastroComponent {
  titulo: String = '';

  constructor(private user: UsuarioService,
    private router: Router,
    private active: ActivatedRoute
  ){}
}
