import { Component, inject } from '@angular/core';
import { AdmHeaderComponent } from '../../../components/ADM/adm-header/adm-header.component';
import { NavComponent } from '../../../components/ADM/nav/nav.component';
import { ListaPrdComponent } from '../../../components/ADM/lista-prd/lista-prd.component';
import { BreadcumbsComponent } from '../../../components/principal/breadcumbs/breadcumbs.component';
import { FormsModule } from '@angular/forms';
import { ProdutosService } from '../../../core/services/produtos.service';
import { Router, RouterLink } from '@angular/router';
import { data } from 'jquery';
import { Produto, Espeficacao } from '../../../core/types/types';

class ImageSnippet{
  constructor(public src:string, public file:File){}
}

@Component({
  selector: 'app-adm-add',
  imports: [ AdmHeaderComponent, NavComponent, ListaPrdComponent, BreadcumbsComponent, FormsModule, RouterLink],
  templateUrl: './adm-add.component.html',
  styleUrl: './adm-add.component.css'
})
export class AdmAddComponent {
  produto:Produto = {} as Produto;
  especificacao:Espeficacao = {} as Espeficacao; 
  caminho:any = "icons/adm/img-frame-icon.svg";

  constructor(
    private service: ProdutosService,
    private router: Router
  ){}

  imagemSelecionada: ImageSnippet[] = [];

  carregarArquivo(img:any, posicao: number){
    debugger
    const file:File = img.files[posicao];
    const reader = new FileReader;

    reader.addEventListener('load', (event: any) => {
      debugger
      this.imagemSelecionada[posicao] = new ImageSnippet(event.target.result, file)
    })
    debugger
    reader.readAsDataURL(file);
    this.caminho = this.imagemSelecionada[posicao].src;
  }

  paginas = ["Produtos", "adicionarProduto"];
  

  addProd(){  
      alert("Produto adicionado com sucesso!")
  }

  addEspecificacao(){
    this.produto.especificacoes.push(
      this.especificacao
    )
  }
  
}
