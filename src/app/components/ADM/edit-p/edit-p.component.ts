import { Component, inject } from '@angular/core';
import { ProdutosService } from '../../../services/produtos.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-p',
  imports: [],
  templateUrl: './edit-p.component.html',
  styleUrl: './edit-p.component.css'
})
export class EditPComponent {
    _produtosMain = inject(ProdutosService);
    _produtos = this._produtosMain.produtos;
    _caminho = inject(ActivatedRoute);

    busca() {
      return Number(this._caminho.snapshot.url[3].path);
    }

  

    categorias:String[] = ["Brinquedos", "Revistas", "Carrinhos", "Fofos"];
    acoes:String[] = ["Nome do Produto", "Descrição do Produto", "Quantidade", "Preço", "Ano de Lançamento", "Marca"];
    espec:String[ ] = ["Especificação", "Valor"];
}
