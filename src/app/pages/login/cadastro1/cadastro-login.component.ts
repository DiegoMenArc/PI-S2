import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Observable } from 'rxjs';
import { CardCadastroComponent } from '../../../components/cards/card-cadastro/card-cadastro.component';

@Component({
  selector: 'app-cadastro-login',
  imports: [RouterLink, FormsModule, CardCadastroComponent],
  templateUrl: './cadastro-login.component.html',
  styleUrl: './cadastro-login.component.css'
})
export class CadastroLoginComponent {

  titulo: String = "Email";
  acao: String = "Informe o email";
  subAcao: String = "Confirme o email"
  placeH1: String = "Aqui um";
  placeH2: String = "Aqui outro";
  link: String = "";

  constructor(private route: ActivatedRoute){
    const child = this.route.firstChild?.snapshot.url[0]?.path;   

    if(child === 'cadastro/nome'){

      this.titulo = "Nome"
      this.acao = "Informe o seu nome"
      this.subAcao = "Informe o seu sobrenome"
      this.placeH1 = "Insira aqui o seu nome!"
      this.placeH2 = "Insira aqui o seu sobrenome"
      this.link = "cadastro/telefone"

    }else if(child === 'cadastro/email'){

      this.titulo = "Email"
      this.acao = "Informe o seu melhor email"
      this.subAcao = "Confirme o email"
      this.placeH1 = "Insira aqui o seu email"
      this.placeH2 = ""

    }else if(child === 'cadastro/telefone'){

      this.titulo = "Email"
      this.acao = "Informe o seu melhor email"
      this.subAcao = "Confirme o email"
      this.placeH1 = "Insira aqui o seu email"
      this.placeH2 = ""

    }else if(child === 'cadastro/senha'){

    }else if(child === 'cadastro/código'){

    }
  }
  

  
  //o route pega a rota children ativa na pagina atraves da url

  
}
