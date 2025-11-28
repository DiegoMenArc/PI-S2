import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AutenticadorService } from '../../../core/services/autenticador.service';
import { UsuarioService } from '../../../core/services/usuario.service';
import { Usuario } from '../../../core/types/types';

@Component({
  selector: 'app-dados-user',
  imports: [],
  templateUrl: './dados-user.component.html',
  styleUrl: './dados-user.component.css'
})
export class DadosUserComponent implements OnInit {

  private nome = '';
  private sobrenome = '';
  private email = '';
  private telefone = 0;

  private data_nasc:
    {
      dia: number;
      mes_num: number;
      ano: number;
    }
    | undefined = undefined;

  private CPF = '';
  private endereco = '';
  private numero = 0;

  constructor(private serv: UsuarioService, private auth: AutenticadorService, private router: Router) {

  }

  form = new FormGroup({
    nome: new FormControl(this.nome, []),
    sobrenome: new FormControl(this.sobrenome, []),
    email: new FormControl(this.email, []),
    telefone: new FormControl(this.telefone, [Validators.maxLength(11), Validators.minLength(11)]),
    dia: new FormControl<string>('', []),
    mes: new FormControl<string>('', []),
    ano: new FormControl<string>('', []),

    CPF: new FormControl(this.CPF, []),
    endereco: new FormControl(this.endereco, []),
    numero: new FormControl(this.numero, []),
  })

  user!: Usuario;
  ngOnInit(): void {
    this.user = this.auth.getUser();

    this.nome = this.user.nome ?? '';
    this.sobrenome = this.user.sobrenome ?? '';
    this.email = this.user.email ?? '';
    this.telefone = this.user.telefone ?? 0;

    this.data_nasc = this.user.data_nasc
      ? {
        dia: this.user.data_nasc.dia ?? 0,
        mes_num: this.user.data_nasc.mes_num ?? 0,
        ano: this.user.data_nasc.ano ?? 0,
      }
      : undefined;

    this.CPF = this.user.Cpf ?? '';
    this.endereco = this.user.endereco?.logradouro ?? '';
    this.numero = this.user.endereco?.numero ?? 0;
  }

  alterar() {

    const { nome, sobrenome, email, telefone, dia, mes, ano, CPF, endereco, numero } = this.form.value

    const dn =
      dia || mes || ano
        ? {
          dia: Number(dia ?? this.data_nasc?.dia ?? 0),
          mes_num: Number(mes ?? this.data_nasc?.mes_num ?? 0),
          ano: Number(ano ?? this.data_nasc?.ano ?? 0),
        }
        : this.data_nasc;

    this.user.nome = nome ?? this.nome;
    this.user.sobrenome = sobrenome ?? this.sobrenome;
    this.user.email = email ?? this.email;
    this.user.telefone = telefone ? Number(telefone) : this.telefone;
    this.user.data_nasc = dn;

    this.user.Cpf = CPF ?? this.CPF;

    if (!this.user.endereco) {
      this.user.endereco = {
        logradouro: '',
        numero: 0,
        cidade: '',
        bairro: '',
        cep: 0
      };
    }

    this.user.endereco.logradouro = endereco ?? this.endereco;
    this.user.endereco.numero = numero ? Number(numero) : this.numero;

    this.serv.editarUser(this.user).subscribe((usuario)=>{
      if(usuario){
        this.router.navigate(['perfil'])
      }
    });
  }
}

