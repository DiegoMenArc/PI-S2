import { Component, Input } from '@angular/core';
import { Validators } from '@angular/forms';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-card-cadastro',
  imports: [RouterLink],
  templateUrl: './card-cadastro.component.html',
  styleUrl: './card-cadastro.component.css'
})
export class CardCadastroComponent {

  @Input() titulo: string = '';
  @Input() acao: string = '';
  @Input() subAcao: string = '';
  @Input() placeH1: string = '';
  @Input() placeH2: string = '';
  @Input() link: string = '';

}
