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
      nota : ['','','','',''],
      nome: "Adaylson Arcanjo",
      comentario: "Bacana isso ai cara",
      data: "Postado em 18 de setembro de 2025 as 14:15"
    },
    {
      nota : ['','','','',''],
      nome: "Adaylson Arcanjo",
      comentario: "Bacana isso ai cara",
      data: "Postado em 18 de setembro de 2025 as 14:15"
    },
    {
      nota : ['','','','',''],
      nome: "Adaylson Arcanjo",
      comentario: "Bacana isso ai cara",
      data: "Postado em 18 de setembro de 2025 as 14:15"
    },
    {
      nota : ['','','','',''],
      nome: "Adaylson Arcanjo",
      comentario: "Bacana isso ai cara",
      data: "Postado em 18 de setembro de 2025 as 14:15"
    },
    {
      nota : ['','','','',''],
      nome: "Adaylson Arcanjo",
      comentario: "Bacana isso ai cara",
      data: "Postado em 18 de setembro de 2025 as 14:15"
    }
  ]
}
