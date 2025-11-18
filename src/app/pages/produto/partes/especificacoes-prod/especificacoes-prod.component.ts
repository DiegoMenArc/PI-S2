import { Component, Input } from '@angular/core';
import { Especificacao } from '../../../../core/types/types';

@Component({
  selector: 'app-especificacoes-prod',
  imports: [],
  templateUrl: './especificacoes-prod.component.html',
  styleUrl: './especificacoes-prod.component.css'
})
export class EspecificacoesProdComponent {
  @Input() especificacoes?:Especificacao[];
  @Input() adicionais?:Especificacao[];
}
