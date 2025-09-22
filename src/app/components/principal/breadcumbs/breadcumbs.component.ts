import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-breadcumbs',
  imports: [],
  templateUrl: './breadcumbs.component.html',
  styleUrl: './breadcumbs.component.css'
})
export class BreadcumbsComponent {
  @Input() pages:String[]= [];
}
