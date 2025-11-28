import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { FormControl, FormGroup, FormsModule, NgModel, ReactiveFormsModule, Validators } from '@angular/forms';
import { Usuario } from '../../../core/types/types';
import { UsuarioService } from '../../../core/services/usuario.service';
import { AutenticadorService } from '../../../core/services/autenticador.service';

@Component({
  selector: 'app-cadastro-login',
  imports: [FormsModule, ReactiveFormsModule, RouterLink],
  templateUrl: './cadastro-login.component.html',
  styleUrl: './cadastro-login.component.css'
})
export class CadastroLoginComponent {

  titulo = "cadastro"
  aviso = ""

  user: Usuario = {
    nome: '',
    sobrenome: '',
    user_name: '',
    email: '',
    senha: ''
  }

  constructor(private serv: UsuarioService, private auth: AutenticadorService, private router: Router) {
  
  }

  formulario = new FormGroup({
    email: new FormControl('', [Validators.required]),
    nome: new FormControl('', [Validators.required, Validators.minLength(3)]),
    sobrenome: new FormControl('', [Validators.required, Validators.minLength(3)]),
    senha: new FormControl('', [Validators.required, Validators.minLength(8)]),
  })

  cadastrarUser() {
    if (this.formulario.invalid) {
      this.formulario.markAllAsTouched;
      this.aviso = "preencha as informações"
      return;
    } else if (this.formulario.valid) {
      const { nome, sobrenome, email, senha } = this.formulario.value;

      this.user.nome = nome ?? '';
      //garante que tenha uma string.mesmo que não tenha valor nela
      this.user.sobrenome = sobrenome ?? '';
      this.user.email = email ?? '';
      this.user.senha = senha ?? '';

      this.serv.adiconarUser(this.user).subscribe(() => {
        this.auth.login(this.user.nome, this.user.senha);
        this.router.navigate(['login']);
      })
    }
  }
}
