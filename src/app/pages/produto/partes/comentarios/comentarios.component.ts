import { Component } from '@angular/core';

@Component({
  selector: 'app-comentarios',
  imports: [],
  templateUrl: './comentarios.component.html',
  styleUrl: './comentarios.component.css'
})
export class ComentariosComponent {

  mediaNota = ['','','','',''];

  totalAvaliacoes = [
    {
      estrela: "5",
      porcentagem: 100
    },
    {
      estrela: "4",
      porcentagem: 0
    },
    {
      estrela: "3",
      porcentagem: 0
    },
    {
      estrela: "2",
      porcentagem: 0
    },
    {
      estrela: "1",
      porcentagem: 0
    },
  ];

  avaliacoes = [
    {
      nota : ['','','','',''],
      nome: "Adaylson Arcanjo",
      comentario: "Bacana isso ai cara",
      data: "Postado em 18 de setembro de 2025 as 14:15"
    },
    {
      nota : [''],
      nome: "Glauber Larinjo",
      comentario: "Comprei pq achei que dava pra morar mesmo, me decepcionei",
      data: "Postado em 15 de setembro de 2025 as 12:24"
    },
    {
      nota : ['','','','',''],
      nome: "Camilo Sabugosa.",
      comentario: "Bom.",
      data: "Postado em uma data."
    },
    {
      nota : ['','','','',''],
      nome: "Dalva",
      comentario: "Custa só 90 reais, mas eu pagaria R$2050 de tão bom que é",
      data: "Postado em 13 de janeiro de 2025 as 20:32"
    },
    {
      nota : ['','','','',''],
      nome: "Higor 2000",
      comentario: "Bagui é bom memo, as cria tudo se amarro aqui em casa",
      data: "Postado em 16 de março as 23:99"
    },
    {
      nota : ['','','','',],
      nome: "Vanessa Lopes",
      comentario: "Produto excelente",
      data: "Postado em 21 de agosto de 2025 as 19:01"
    }
  ]
}
