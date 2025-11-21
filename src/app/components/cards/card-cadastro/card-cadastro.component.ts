import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from "@angular/router";
import { Usuario } from '../../../core/types/types';

@Component({
  selector: 'app-card-cadastro',
  imports: [RouterLink, ReactiveFormsModule],
  templateUrl: './card-cadastro.component.html',
  styleUrl: './card-cadastro.component.css'
})
export class CardCadastroComponent implements OnInit {

// Atributos de exibição que serão definidos no construtor
  titulo: string = '';
  acao: string = '';
  subAcao: string = '';
  placeH1: string = '';
  placeH2: string = '';
  link: string = ''; // Rota relativa para o próximo passo

  //O componente vai emitir os dados do cliente para o componente pai, o cadastro
  @Output() dadosCli = new EventEmitter<Usuario>();
  
  constructor(private route: ActivatedRoute, private router: Router) {}
    
  ngOnInit(): void {
    //quando recarregar o componente, ja inicia o subscribe para ouvir as mudanças no formulario
    this.carregarConteudo();
    // 2. Inicia o subscribe para ouvir as mudanças no formulario
    this.form.valueChanges.subscribe(() => this.onInputChange());
  }

  carregarConteudo() {
    // Pega o último segmento da URL, que é o nome da etapa (email, nome, etc.)
    const childPath = this.route.snapshot.url[0]?.path;

    // O problema estava aqui: Se a rota for /cadastro/email, o path é 'email'.
    if(childPath === 'nome'){
        this.titulo = "Nome";
        this.acao = "Cadastre seu nome completo";
        this.subAcao = "Confirme seu sobrenome";
        this.placeH1 = "Insira aqui o seu nome!";
        this.placeH2 = "Insira aqui o seu sobrenome";
        this.link = 'telefone'; // Próximo passo é 'telefone'
        
    } else if (childPath === 'email') {
        this.titulo = "Email";
        this.acao = "Cadastre seu melhor email";
        this.subAcao = "Confirme seu email para continuar";
        this.placeH1 = "Email";
        this.placeH2 = "Confirme seu email";
        this.link = 'nome'; // Próximo passo é 'nome'
        
    } else if (childPath === 'telefone') {
        this.titulo = "Telefone"
        this.acao = "Informe o seu telefone"
        this.subAcao = "Confirme o DDD"
        this.placeH1 = "Insira aqui o seu telefone"
        this.placeH2 = "Insira aqui o seu DDD"
        this.link = 'senha';
        
    } else if (childPath === 'senha') {
        this.titulo = "Senha"
        this.acao = "Crie sua senha"
        this.subAcao = "Confirme a senha"
        this.link = 'username';
        
    } else if (childPath === 'username') {
        this.titulo = "Username"
        this.acao = "Crie seu nome de usuário"
        this.subAcao = "Confirme o username"
        this.link = 'concluir';
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


  // Função que será chamada ao clicar em Continuar
  navegarProximoPasso() {
    // Usa o Router para navegar para a ROTA RELATIVA, subindo um nível (../)
    // Ex: Se estiver em /cadastro/email, navega para /cadastro/nome
    this.router.navigate(['../', this.link], { relativeTo: this.route });
  }


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

}
