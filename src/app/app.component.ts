import { Component } from '@angular/core';
import { MenuComponent } from "./menu/menu.component";
import { SidemenuComponent } from "./sidemenu/sidemenu.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  imports: [MenuComponent, SidemenuComponent],
})
export class AppComponent {
}
