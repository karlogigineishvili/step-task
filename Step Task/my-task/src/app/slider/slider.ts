import { Component } from '@angular/core';

@Component({
  selector: 'app-slider',
  imports: [],
  templateUrl: './slider.html',
  styleUrl: './slider.css',
})
export class Slider {
  pics: string[] = [
    'https://picsum.photos/800/400?random=1',
    'https://picsum.photos/800/400?random=2',
    'https://picsum.photos/800/400?random=3',
  ];

currentIndex: number = 0;
next() {
  this.currentIndex = (this.currentIndex +1) % this.pics.length
}
 
prev () {
  this.currentIndex = (this.currentIndex +1) % this.pics.length
}
}
