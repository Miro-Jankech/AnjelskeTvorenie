import { Component } from '@angular/core';
import { MenuComponent } from "./menu/menu.component";
import { SidemenuComponent } from "./sidemenu/sidemenu.component";
import { FooterComponent } from "./footer/footer.component";
import { RouterOutlet } from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  imports: [MenuComponent, SidemenuComponent, FooterComponent, RouterOutlet],
})
export class AppComponent {
 }
