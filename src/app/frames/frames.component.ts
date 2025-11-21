import { Component } from '@angular/core';

@Component({
  selector: 'app-frames',
  imports: [],
  templateUrl: './frames.component.html',
  styleUrl: './frames.component.css'
})
export class FramesComponent {
  frames: string[] = [
    'frames/f1.jpg',
    'frames/f2.jpg',
    'frames/f7.jpg',
    'frames/ang31.jpg',
    'frames/ang34.jpg',
    'frames/ang35.jpg',
  ]
}
