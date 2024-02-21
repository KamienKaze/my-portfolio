import {Component, ElementRef, ViewChild} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import WAVES from 'vanta/dist/vanta.waves.min.js';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'my-portfolio';

  @ViewChild('background', { static: true }) backgroundElement: ElementRef;

  ngOnInit() {
    WAVES({
      el: this.backgroundElement.nativeElement,
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 200.00,
      minWidth: 200.00,
      scale: 1.00,
      scaleMobile: 1.00,
      color: 0x0,
      waveHeight: 11.00,
      waveSpeed: 0.40,
    })
  }
}
