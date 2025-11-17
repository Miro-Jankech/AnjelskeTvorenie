import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from "./menu/menu.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  imports: [HeaderComponent, MenuComponent],
})
export class AppComponent {
}
