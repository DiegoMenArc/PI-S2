import { Component } from '@angular/core';

import { HeaderComponent } from '../../components/principal/header/header.component'
import { FooterComponent } from '../../components/principal/footer/footer.component'

@Component({
  selector: 'app-landing-page',
  imports: [HeaderComponent, FooterComponent],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.css'
})
export class LandingPageComponent {

}
