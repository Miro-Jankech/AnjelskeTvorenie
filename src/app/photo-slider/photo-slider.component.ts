import { Component, DestroyRef, inject, OnInit, output } from '@angular/core';

@Component({
  selector: 'app-photo-slider',
  imports: [],
  templateUrl: './photo-slider.component.html',
  styleUrl: './photo-slider.component.css'
})
export class PhotoSliderComponent implements OnInit {
  imgSlider: string[] = [
    'slider/s1.jpg',
    'slider/s2.jpg',
    'slider/s3.jpg',
    'slider/s4.jpg',
    'slider/s5.jpg',
    'slider/s6.jpg',
    'slider/s7.jpg',
    'slider/s8.jpg',
    'slider/s11.jpg',
    'slider/s12.jpg',
  ];

  private destroyRef = inject(DestroyRef);

  sliderIndex = 0;
  progress = 0;
  progressIntervalId!: ReturnType<typeof setInterval>;

  isFading = false;

  ngOnInit() {
    this.imgSlider.forEach(src => {
      const img = new Image();
      img.src = src;
    });
  
    this.startProgress();
  
    this.destroyRef.onDestroy(() => {
      clearInterval(this.progressIntervalId);
    });
  }

  startProgress() {
    this.progress = 0.01;
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
    clearInterval(this.progressIntervalId); // ✅ stop auto-slide immediately
  
    this.isFading = true;
  
    setTimeout(() => {
      this.sliderIndex = (this.sliderIndex + 1) % this.imgSlider.length;
      this.isFading = false;
      this.startProgress(); // ✅ restart only AFTER image changes
    }, 300);
  }
  
  prevImage() {
    clearInterval(this.progressIntervalId); // ✅ stop auto-slide immediately
  
    this.isFading = true;
  
    setTimeout(() => {
      this.sliderIndex =
        (this.sliderIndex - 1 + this.imgSlider.length) % this.imgSlider.length;
      this.isFading = false;
      this.startProgress(); // ✅ restart only AFTER image changes
    }, 300);
  }
  

}
