import { Component, inject, OnInit } from '@angular/core';
import { ProdutosService } from '../../../core/services/produtos.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Produto } from '../../../core/types/types';

@Component({
  selector: 'app-edit-p',
  imports: [],
  templateUrl: './edit-p.component.html',
  styleUrl: './edit-p.component.css'
})
export class EditPComponent implements OnInit{
  listarProduto: Produto[] = [];

  constructor(
    private service: ProdutosService,
    private router: Router
  ){}
  
  ngOnInit(): void {
    this.service.listarProdutos().subscribe((produto)=>{
      this.listarProduto = produto;
    });
  }
    _caminho = inject(ActivatedRoute);

    busca() {
      return Number(this._caminho.snapshot.url[3].path);
    }

    categorias:String[] = ["Brinquedos", "Revistas", "Carrinhos", "Fofos"];
    acoes:String[] = ["Nome do Produto", "Descrição do Produto", "Quantidade", "Preço", "Ano de Lançamento", "Marca"];
    espec:String[ ] = ["Especificação", "Valor"];

    editar(){
      
    }
}
