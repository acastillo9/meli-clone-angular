import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faBars, faCartShopping } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-responsive-menu',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './responsive-menu.component.html',
  styleUrl: './responsive-menu.component.scss'
})
export class ResponsiveMenuComponent {
  faBars = faBars
  faCartShopping = faCartShopping
}
