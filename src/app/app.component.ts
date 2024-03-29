import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

import WAVES from 'vanta/dist/vanta.waves.min.js';
import { ArrowComponent } from './components/arrow/arrow.component';
import { WelcomePageComponent } from './components/welcome-page/welcome-page.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, ArrowComponent, WelcomePageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  @ViewChild('background', { static: true }) backgroundElement: ElementRef;

  constructor() {}

  ngAfterViewInit() {
    WAVES({
      el: this.backgroundElement.nativeElement,
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 200.0,
      minWidth: 200.0,
      scale: 1.0,
      scaleMobile: 1.0,
      color: 0x0,
      waveHeight: 11.0,
      waveSpeed: 0.5,
    });
  }
}
