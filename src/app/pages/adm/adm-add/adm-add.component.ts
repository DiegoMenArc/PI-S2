import { Component, inject } from '@angular/core';
import { AdmHeaderComponent } from '../../../components/ADM/adm-header/adm-header.component';
import { NavComponent } from '../../../components/ADM/nav/nav.component';
import { ListaPrdComponent } from '../../../components/ADM/lista-prd/lista-prd.component';
import { BreadcumbsComponent } from '../../../components/principal/breadcumbs/breadcumbs.component';
import { FormsModule } from '@angular/forms';
import { ProdutosService } from '../../../core/services/produtos.service';
import { RouterLink } from '@angular/router';
import { data } from 'jquery';

@Component({
  selector: 'app-adm-add',
  imports: [ AdmHeaderComponent, NavComponent, ListaPrdComponent, BreadcumbsComponent, FormsModule, RouterLink],
  templateUrl: './adm-add.component.html',
  styleUrl: './adm-add.component.css'
})
export class AdmAddComponent {
  _produtosMain = inject(ProdutosService);
  paginas = ["Produtos", "adicionarProduto"];
  usuario = "";
  produto=
    {
      img:[
        "img/prod1.jpg",
        "img/prod1.jpg",
        "img/prod1.jpg",
        "img/prod1.jpg",
        "img/prod1.jpg",
      ],
      id:null,
      nome:"",
      descricao:"",
      anoLancamento:"",
      marca:"",
      preco:"",
      tamanho:"",
      qtd:null,
      data:"03/10/2025",
      categoria:"",
      especificacoes:[
        {
          especificacao:"",
          valor:""
        }
      ]
    }
  

  addProd(){
      this._produtosMain.adiconarProduto(this.produto);      
      alert("Produto adicionado com sucesso!")
  }

  addEspecificacao(){
    this.produto.especificacoes .push(
      {
        especificacao:"",
        valor:""
      }
    )
  }
  
}
