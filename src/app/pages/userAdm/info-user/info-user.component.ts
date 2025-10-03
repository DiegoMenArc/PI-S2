import { Component } from '@angular/core';
import { MenuContaComponent } from '../../../components/user-info/menu-conta/menu-conta.component';
import { HeaderComponent } from "../../../components/principal/header/header.component";
import { FooterComponent } from "../../../components/principal/footer/footer.component";
import { DadosUserComponent } from '../../../components/user-info/dados-user/dados-user.component';

@Component({
  selector: 'app-info-user',
  imports: [ DadosUserComponent ,MenuContaComponent, HeaderComponent, FooterComponent],
  templateUrl: './info-user.component.html',
  styleUrl: './info-user.component.css'
})
export class InfoUserComponent {

}
