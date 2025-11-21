import { Component } from '@angular/core';

@Component({
  selector: 'app-decorations',
  imports: [],
  templateUrl: './decorations.component.html',
  styleUrl: './decorations.component.css'
})
export class DecorationsComponent {
  decorations: string[] = [
    'decoration/a1.jpg',
    'decoration/a3.jpg',
    'decoration/a4.jpg',
    'decoration/a5.jpg',
    'decoration/a6.jpg',
    'decoration/a7.jpg',
    'decoration/a8.jpg',
    'decoration/a9.jpg',
  ]
}
