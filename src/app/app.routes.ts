import { Routes } from '@angular/router';
import { DecorationsComponent } from './decorations/decorations.component';
import { MacrameComponent } from './macrame/macrame.component';
import { FramesComponent } from './frames/frames.component';
import { PhotoSliderComponent } from './photo-slider/photo-slider.component';
import { WreathsComponent } from './wreath/wreath.component';
import { AboutUsComponent } from './about-us/about-us.component';


export const routes:Routes = [
  {
    path: '', 
    component: PhotoSliderComponent
  },
  
  {
    path: 'decorations',
    component: DecorationsComponent
  },
  {
    path: 'macrame',
    component: MacrameComponent
  },
  {
    path: 'frames',
    component: FramesComponent
  },
  {
    path: 'wreath',
    component: WreathsComponent
  },
  {
    path: 'aboutUs',
    component: AboutUsComponent
  }
];
