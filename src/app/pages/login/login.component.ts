import { Component} from '@angular/core';  
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsuarioService } from '../../core/services/usuario.service';
import { MenuHeaderComponent } from "../../components/principal/menu-header/menu-header.component";
import { FooterComponent } from "../../components/principal/footer/footer.component";
import { Observable, of } from 'rxjs';
import { AutenticadorService } from '../../core/services/autenticador.service';
import { Usuario } from '../../core/types/types';

@Component({
  selector: 'login',
  imports: [FormsModule, ReactiveFormsModule, MenuHeaderComponent, FooterComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  constructor(private router: Router, private auth: AutenticadorService, private serv: UsuarioService){}
  
  aviso = '';
  user!: Usuario;

  form = new FormGroup({
    email: new FormControl('', [Validators.required]),
    senha: new FormControl('', [Validators.required])
  })

  verificar(){
    this.logar().subscribe(user => {
      if(user){
        this.user = user;
        this.aviso = 'logado';
        this.router.navigate(['perfil']);
      }else{
        if(this.form.valid){
          this.aviso = 'user ou senha invalidos'
        }
      }
    })
  }

  logar(): Observable<Usuario | null>{
    if(this.form.invalid){
      this.form.markAllAsTouched();
      return of (null)
    }else{
      const {email, senha} = this.form.value

      return this.auth.login(email??'', senha??'')
      //garantia de que email e senha não sejam mandados como null
    }
  }

  clicarCadastro(){
    this.router.navigate(['/cadastro']);
  }

}

