import { Component } from '@angular/core';
import { SearchBarComponent } from '../search-bar/search-bar.component';
import { LogoComponent } from '../logo/logo.component';
import { BannerComponent } from '../banner/banner.component';
import { ResponsiveMenuComponent } from '../responsive-menu/responsive-menu.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [SearchBarComponent, LogoComponent, BannerComponent, ResponsiveMenuComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
}
