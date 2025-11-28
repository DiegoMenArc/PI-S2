import { Component } from '@angular/core';
import { AdmHeaderComponent } from "../../../components/ADM/adm-header/adm-header.component";
import { NavComponent } from "../../../components/ADM/nav/nav.component";
import { ListaUserComponent } from "../../../components/ADM/lista-user/lista-user.component";

@Component({
  selector: 'app-lista-users',
  imports: [AdmHeaderComponent, NavComponent, ListaUserComponent],
  templateUrl: './lista-users.component.html',
  styleUrl: './lista-users.component.css'
})
export class ListaUsersComponent {

}
