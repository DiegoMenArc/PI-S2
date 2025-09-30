import { Component } from '@angular/core';
import { EditPComponent } from '../../../components/ADM/edit-p/edit-p.component';
import { AdmHeaderComponent } from '../../../components/ADM/adm-header/adm-header.component';
import { NavComponent } from '../../../components/ADM/nav/nav.component';

@Component({
  selector: 'app-adm-edit',
  imports: [EditPComponent, AdmHeaderComponent, NavComponent],
  templateUrl: './adm-edit.component.html',
  styleUrl: './adm-edit.component.css'
})
export class AdmEditComponent {

}
