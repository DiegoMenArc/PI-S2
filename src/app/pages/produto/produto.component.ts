import { Component } from '@angular/core';

import { FooterComponent } from '../../components/principal/footer/footer.component'
import { ProdMainComponent } from './partes/prod-main/prod-main.component'
import { CarrosselprodComponent } from './partes/carrosselprod/carrosselprod.component';
import { EspecificacoesProdComponent } from './partes/especificacoes-prod/especificacoes-prod.component';
import { ComentariosComponent } from './partes/comentarios/comentarios.component';


@Component({
  selector: 'app-produto',
  imports: [ FooterComponent,ProdMainComponent,CarrosselprodComponent, EspecificacoesProdComponent, ComentariosComponent],
  templateUrl: './produto.component.html',
  styleUrl: './produto.component.css'
})
export class ProdutoComponent {

}


