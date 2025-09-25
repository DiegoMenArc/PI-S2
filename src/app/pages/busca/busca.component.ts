import { Component, inject } from '@angular/core';
import { HeaderComponent } from '../../components/principal/header/header.component';
import { BreadcumbsComponent } from '../../components/principal/breadcumbs/breadcumbs.component';
import { FiltrosComponent } from './partes/filtros/filtros.component';
import { BuscaService } from '../../services/busca.service';
import { CardPadraoComponent } from '../../components/card-padrao/card-padrao.component';
import { CarrosselprodComponent } from '../produto/partes/carrosselprod/carrosselprod.component';

@Component({
  selector: 'busca',
  imports: [HeaderComponent,BreadcumbsComponent, FiltrosComponent, CardPadraoComponent, CarrosselprodComponent],
  templateUrl: './busca.component.html',
  styleUrl: './busca.component.css'
})
export class BuscaComponent {
  _buscaService = inject(BuscaService) ;

  cards = [
    {nome:""},
    {nome:""},
    {nome:""},
    {nome:""},
    {nome:""},
    {nome:""},
    {nome:""},
    {nome:""},
    {nome:""},
    {nome:""},
    {nome:""},
    {nome:""},
    {nome:""},
    {nome:""},
    {nome:""},
    {nome:""},
    {nome:""},
    {nome:""},
    {nome:""},
    {nome:""},
    {nome:""}
  ];

  anos = ['2000', '90', '80', '70']
  categorias = ['Classicos', 'Articulaveis', 'Pelucia', 'Blocos  de construção', 'Peões', 'Veiculos', 'Esportes', 'Inflaveis']
  marcas = ['Estrela', 'Lider Brinquedos', 'Nig Brinquedos', 'Novabrink', 'Orange Toys', 'Candide', 'Atma', 'Glasslite']
}
