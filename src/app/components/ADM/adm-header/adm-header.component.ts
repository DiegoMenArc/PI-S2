import { Component } from '@angular/core';

@Component({
  selector: 'app-adm-header',
  imports: [],
  templateUrl: './adm-header.component.html',
  styleUrl: './adm-header.component.css'
})
export class AdmHeaderComponent {
  username:String = "Alessandro";
  user_role:String = "Admin";
}
