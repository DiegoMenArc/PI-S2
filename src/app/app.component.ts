import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
// import { MenuHeaderComponent } from './components/principal/menu-header/menu-header.component';
// import { FooterComponent } from './components/principal/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, /*MenuHeaderComponent, FooterComponent*/],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PI';
}
