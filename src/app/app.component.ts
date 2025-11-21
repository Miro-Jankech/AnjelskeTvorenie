import { Component } from '@angular/core';
import { MenuComponent } from "./menu/menu.component";
import { SidemenuComponent } from "./sidemenu/sidemenu.component";
import { PhotoSliderComponent } from "./photo-slider/photo-slider.component";
import { FooterComponent } from "./footer/footer.component";
import { MacrameComponent } from "./macrame/macrame.component";
import { FramesComponent } from './frames/frames.component';
import { DecorationsComponent } from "./decorations/decorations.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  imports: [MenuComponent, SidemenuComponent, PhotoSliderComponent, FooterComponent, MacrameComponent, FramesComponent, DecorationsComponent],
})
export class AppComponent {
}
