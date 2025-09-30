import { Component } from '@angular/core';

@Component({
  selector: 'app-edit-p',
  imports: [],
  templateUrl: './edit-p.component.html',
  styleUrl: './edit-p.component.css'
})
export class EditPComponent {
    categorias:String[] = ["Brinquedos", "Revistas", "Carrinhos", "Fofos"];
    acoes:String[] = ["Nome do Produto", "Descrição do Produto", "Quantidade", "Preço", "Ano de Lançamento", "Marca"];
    espec:String[ ] = ["Especificação", "Valor"];
}
