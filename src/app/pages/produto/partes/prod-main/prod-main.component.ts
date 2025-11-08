import { Component, Input, input } from '@angular/core';
import { BreadcumbsComponent } from '../../../../components/principal/breadcumbs/breadcumbs.component'


@Component({
  selector: 'app-prodMain',
  imports: [BreadcumbsComponent],
  templateUrl: './prod-main.component.html',
  styleUrl: './prod-main.component.css'
})
export class ProdMainComponent {
  page = ["home","produto"]


  qtd = 1;

  aumentarQtd(){
    this.qtd++;
    console.log(this.qtd);
  }

  diminuirQtd(){
    if(this.qtd>=0){
      this.qtd--;
    }
  }

  @Input() nome_prod ?:string;
  @Input() preco ?:string;
  @Input() desc ?:string;
}
