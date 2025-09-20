import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-botao-header',
  imports: [],
  templateUrl: './botao-header.component.html',
  styleUrl: './botao-header.component.css'
})
export class BotaoHeaderComponent {
  @Input() nome:string = '';
}
