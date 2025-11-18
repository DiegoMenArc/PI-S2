import { Component, EventEmitter, Output } from '@angular/core';
import { CarrosselComponent } from '../../../../components/principal/carrossel/carrossel.component';


@Component({
  selector: 'app-carrosselprod',
  imports: [CarrosselComponent],
  templateUrl: './carrosselprod.component.html',
  styleUrl: './carrosselprod.component.css'
})
export class CarrosselprodComponent {
    id:string ='';
    @Output() enviar = new EventEmitter<string>();

    enviarRota(){
      this.enviar.emit(this.id);
    }

    pegarId(id:string){
      this.id = id;
    }
}
