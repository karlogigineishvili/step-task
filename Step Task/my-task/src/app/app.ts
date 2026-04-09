import { Component, signal } from '@angular/core';
import { Slider } from './slider/slider';


@Component({
  selector: 'app-root',
  imports: [Slider],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  
}
