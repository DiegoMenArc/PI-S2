import { Component } from '@angular/core';

@Component({
  selector: 'app-lista-prd',
  imports: [],
  templateUrl: './lista-prd.component.html',
  styleUrl: './lista-prd.component.css'
})
export class ListaPrdComponent {
    codPrd:number = 0;
    nomeProduto:String = "Produto Legal";
    preco:number = 0;
    qtdPrd:number = 0;
    tamanhoPrd:number = 0;
    data: Date = new Date("20XX-XX-XX");
    numPages:number = 0;

    tipos:String[] = ["Produto", "Preço", "Tamanho", "Quantidade", "Data", "Ações"];
}
