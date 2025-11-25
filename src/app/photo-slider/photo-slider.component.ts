import { Component, DestroyRef, inject, OnInit, output } from '@angular/core';

@Component({
  selector: 'app-photo-slider',
  imports: [],
  templateUrl: './photo-slider.component.html',
  styleUrl: './photo-slider.component.css'
})
export class PhotoSliderComponent implements OnInit {
  imgSlider: string[] = [
    'slider/ang6.jpg',
    'slider/ang35.jpg',
    'slider/ang40.jpg'
  ];

  private destroyRef = inject(DestroyRef);

  sliderIndex = 0;
  progress = 0;
  progressIntervalId!: ReturnType<typeof setInterval>;

  ngOnInit() {
    this.startProgress();
    this.destroyRef.onDestroy(() => {
      clearInterval(this.progressIntervalId);
    });
  }

  startProgress() {
    this.progress = 0;
    clearInterval(this.progressIntervalId);

    this.progressIntervalId = setInterval(() => {
      if (this.progress < 100) {
        this.progress += 100 / (7000 / 100); // ~1.43% per tick
      } else {
        this.nextImage();   // switch image immediately when bar is full
      }
    }, 100);
  }

  pauseProgress() {
    clearInterval(this.progressIntervalId);
  }

  resumeProgress() {
    // continue from current progress
    clearInterval(this.progressIntervalId);
    this.progressIntervalId = setInterval(() => {
      if (this.progress < 100) {
        this.progress += 100 / (7000 / 100);
      } else {
        this.nextImage();
      }
    }, 100);
  }

  nextImage() {
    this.sliderIndex = (this.sliderIndex + 1) % this.imgSlider.length;
    this.startProgress();
  }

  prevImage() {
    this.sliderIndex = (this.sliderIndex - 1 + this.imgSlider.length) % this.imgSlider.length;
    this.startProgress();
  }

}
