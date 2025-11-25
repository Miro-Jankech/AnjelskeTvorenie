import { Component } from '@angular/core';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-sidemenu',
  imports: [RouterLink],
  templateUrl: './sidemenu.component.html',
  styleUrl: './sidemenu.component.css'
})
export class SidemenuComponent {
  marcameVisible : boolean = false;

  getDropDown() {
    this.marcameVisible = true;
  }
}
