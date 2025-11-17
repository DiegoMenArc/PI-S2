import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, RouterLink } from "@angular/router";
import { Usuario } from '../../../core/types/types';

@Component({
  selector: 'app-card-cadastro',
  imports: [RouterLink, ReactiveFormsModule],
  templateUrl: './card-cadastro.component.html',
  styleUrl: './card-cadastro.component.css'
})
export class CardCadastroComponent implements OnInit {

  @Input() titulo: string = '';
  @Input() acao: string = '';
  @Input() subAcao: string = '';
  @Input() placeH1: string = '';
  @Input() placeH2: string = '';
  @Input() link: string = '';

  //O componente vai emitir os dados do cliente para o componente pai, o cadastro
  @Output() dadosCli = new EventEmitter<Usuario>();
  path;

  constructor(private Route: ActivatedRoute, private router: RouterLink) {
    this.path = this.Route.snapshot.children[0]?.url[0]?.path;
    if(this.path == 'nome'){
      this.titulo = 'Nome';
      this.acao = 'Cadastre seu nome completo';
    }
    if (this.path == 'email') {
      this.titulo = 'Email';
      this.acao = 'Cadastre seu melhor email';
      this.subAcao = 'Confirme seu email para continuar';
      this.placeH1 = 'Email';
      this.placeH2 = 'Confirme seu email';
      this.link = 'cadastro/nome';
    }
  }

  form: FormGroup = new FormGroup({
    input1: new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      confirmaEmail: new FormControl('', [Validators.required, Validators.email]),
    }),
    Input2: new FormGroup({
      nome: new FormControl('', [Validators.required, Validators.minLength(6)]),
      sobrenome: new FormControl('', [Validators.required, Validators.minLength(6)]),
    }),
    Input3: new FormGroup({
      Telefone: new FormControl('', [Validators.required, Validators.minLength(6)]),
      TelfAdicionar: new FormControl('', [Validators.minLength(6)]),
    }),
    Input4: new FormGroup({
      senha: new FormControl('', [Validators.required, Validators.minLength(6)]),
      confirmaSenha: new FormControl('', [Validators.required, Validators.minLength(6)]),
    }),
    Input5: new FormGroup({
      Username: new FormControl(false, [Validators.requiredTrue, Validators.minLength(6)]),
    }),
  });

  enviarDados() {
    if (this.form.valid) {
      const usuario: Usuario = {
        email: this.form.get('input1.email')?.value,
        nome: this.form.get('Input2.nome')?.value,
        sobrenome: this.form.get('Input2.sobrenome')?.value,
        telefone: this.form.get('Input3.Telefone')?.value,
        senha: this.form.get('Input4.senha')?.value,
        user_name: this.form.get('Input5.Username')?.value,
      };
      this.dadosCli.emit(usuario);
    }
  }

  onInputChange() {
    //cria um objeto usuario com os dados do formulario
    const usuario: Usuario = {
      email: this.form.get('input1.email')?.value,
      nome: this.form.get('Input2.nome')?.value,
      sobrenome: this.form.get('Input2.sobrenome')?.value,
      telefone: this.form.get('Input3.Telefone')?.value,
      senha: this.form.get('Input4.senha')?.value,
      user_name: this.form.get('Input5.Username')?.value,
    };
    this.dadosCli.emit(usuario);
  }

  ngOnInit(): void {
    //quando recarregar o componente, ja inicia o subscribe para ouvir as mudanças no formulario
    this.form.valueChanges.subscribe(() => this.onInputChange());
  }

}
