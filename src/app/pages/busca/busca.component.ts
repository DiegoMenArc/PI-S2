import { Component, inject } from '@angular/core';
import { BreadcumbsComponent } from '../../components/principal/breadcumbs/breadcumbs.component';
import { FiltrosComponent } from './partes/filtros/filtros.component';
import { BuscaService } from '../../services/busca.service';
import { CardPadraoComponent } from '../../components/card-padrao/card-padrao.component';
import { CarrosselprodComponent } from '../produto/partes/carrosselprod/carrosselprod.component';
import { FooterComponent } from '../../components/principal/footer/footer.component';
import { MenuHeaderComponent } from "../../components/principal/menu-header/menu-header.component";
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'busca',
  imports: [BreadcumbsComponent, FiltrosComponent, CardPadraoComponent, CarrosselprodComponent, FooterComponent, MenuHeaderComponent],
  templateUrl: './busca.component.html',
  styleUrl: './busca.component.css'
})
export class BuscaComponent {
  _buscaService = inject(BuscaService) ;
  _caminho = inject(ActivatedRoute);
  busca() {
    return  this._caminho.snapshot.url[1].path;
  }

  // Variável para controlar a visibilidade do menu
  menuAberto: boolean = false; 

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
